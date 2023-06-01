<script lang="ts" setup>
import gsap from "gsap";

const props = defineProps<{ mousepos: { x: number; y: number }, contents: {
  logo: string;
  title: string;
  description: string;
} }>()

const $el = ref<HTMLElement | null>(null)
const $deco = ref<HTMLElement | null>(null)
const scrollVal = ref<{ x: number; y: number }>()
const rect = ref<DOMRect | null>(null)
const randomString = ref(getRandomString(2000))
const requestId = ref<number>()
const renderedStyles = ref({
  x: { previous: 0, current: 0, amt: 0.1 },
  y: { previous: 0, current: 0, amt: 0.1 }
})


onMounted(() => {
  nextTick(() => {
    calculateSizePosition()
    initEvents()
  })
})

const calculateSizePosition = () => {
  // current scroll
  scrollVal.value = { x: window.scrollX, y: window.scrollY };
  // size/position
  if ($el.value) {
    rect.value = $el.value.getBoundingClientRect();
  }
}

const initEvents = () => {
  // On resize, recalculate the size and position
  window.addEventListener('resize', () => calculateSizePosition());

  // On mousemove over the element, generate a 
  // new random string
  $el.value!.addEventListener('mousemove', () => {
    // Get a new random string
    randomString.value = getRandomString(2000);
  });

  // On mouseenter, fade in the deco element and 
  // start the animation loop
  $el.value!.addEventListener('mouseenter', () => {
    gsap.to($deco.value!, {
      duration: .5,
      ease: 'power3',
      opacity: 1
    });
    const isFirstTick = true;
    loopRender(isFirstTick);
  });

  // On mouseleave, stop the animation loop and 
  // fade out the deco element
  $el.value!.addEventListener('mouseleave', () => {
    stopRendering();

    gsap.to($deco.value!, {
      duration: .5,
      ease: 'power3',
      opacity: 0
    });
  });
}

const loopRender = (isFirstTick = false) => {
  if (!requestId.value) {
    requestId.value = requestAnimationFrame(() => render(isFirstTick));
  }
}

const render = (isFirstTick: boolean) => {
  // Clear requestId for the next frame
  requestId.value = undefined;

  // Calculate the difference between the current 
  // scroll position and the stored one
  const scrollDiff = {
    x: scrollVal.value!.x - window.scrollX,
    y: scrollVal.value!.y - window.scrollY
  };

  // Calculate the new translation values based on 
  // the mouse position, scroll difference and 
  // the element's position
  renderedStyles.value['x'].current = (props.mousepos.x - (scrollDiff.x + rect.value!.left));
  renderedStyles.value['y'].current = (props.mousepos.y - (scrollDiff.y + rect.value!.top));

  // If it's the first animation tick, set the 
  // previous values to be the same as the current ones
  if (isFirstTick) {
    renderedStyles.value['x'].previous = renderedStyles.value['x'].current;
    renderedStyles.value['y'].previous = renderedStyles.value['y'].current;
  }

  // Update the previous value to be a linear 
  // interpolation between the previous and current values
  for (const key in renderedStyles.value) {
    const newKey = key as keyof typeof renderedStyles.value;
    renderedStyles.value[newKey].previous = lerp(renderedStyles.value[newKey].previous, renderedStyles.value[newKey].current, renderedStyles.value[newKey].amt);
  }

  // Apply the new styles to the DOM element 
  // using CSS variables
  gsap.set($el.value!, {
    '--x': renderedStyles.value['x'].previous,
    '--y': renderedStyles.value['y'].previous
  });

  // Set the deco element's innerHTML to the random string
  $deco.value!.innerHTML = randomString.value;

  // Request the next frame
  loopRender();
}

const stopRendering = () => {
  if (requestId.value) {
    window.cancelAnimationFrame(requestId.value);
    requestId.value = undefined;
  }
}
</script>

<template>
  <div
    class="bg-white flex-grow rounded-lg mb-20 p-8 shadow-xl shadow-slate-400/10 hover:shadow-primary-400/10 transition-all border border-slate-100"
  >
    <div
      ref="$el"
      class="item-img flex items-center justify-center bg-slate-50"
    >
      <img
        class="img"
        :src="props.contents.logo"
      >
      <div
        ref="$deco"
        class="item-img-deco"
      />
    </div>
    <div class="text-xl font-semibold mb-6">
      {{ props.contents.title }}
    </div>
    <div class="text-slate-500">
      {{ props.contents.description }}
    </div>
  </div>
</template>

<style scoped>
.item-img {
  @apply relative aspect-square rounded-xl overflow-hidden mb-4 bg-white;
  --x: 0px;
  --y: 0px;
}

.item-img::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(255,255,255, 90%) 40%, rgb(102, 51, 238) 50%, rgb(142, 100, 255), rgb(249, 38, 114));
  mix-blend-mode: lighten;
}

.item-img-deco {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-family: "input-mono", monospace;
  font-size: 0.85rem;
  word-wrap: break-word;
  line-height: 1.15;
  color: black;
  opacity: 0;
  -webkit-mask-image: radial-gradient(200px circle at var(--x) var(--y), black 20%, rgba(0, 0, 0, 0.25), transparent);
  mask-image: radial-gradient(200px circle at var(--x) var(--y), black 20%, rgba(0, 0, 0, 0.25), transparent);
}

.item-img .img {
  @apply relative z-10 items-center w-36;
}
</style>