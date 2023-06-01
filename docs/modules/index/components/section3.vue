<script lang="ts" setup>
import Item from './section3/item.vue'
import Section3_2 from '~/assets/img/section3-2.svg'
import Section3_1 from '~/assets/img/section3-1.svg'

const section3Items = [
  {
    logo: Section3_1,
    title: 'Build with Tailwind + Nuxt',
    description: 'Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
  },
  {
    logo: Section3_2,
    title: 'Comprehensive Components',
    description: ' Streamline the website development process by providing pre-built elements that can be easily integrated into different pages or sections. They are often part of a larger design system or framework, ensuring consistency and cohesiveness throughout the website',
  },
  {
    logo: Section3_1,
    title: 'Better Control CSS Class',
    description: 'Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
  }
]

const mousepos = ref({ x: 0, y: 0 })

onMounted(() => {
  nextTick(() => {
    window.addEventListener('mousemove', ev => {
      // Save the mouse position
      mousepos.value = getMousePos(ev);
    });
  })
})

</script>

<template>
  <div class="max-w-7xl mx-auto mt-20">
    <div class="grid grid-cols-3 gap-8 w-full">
      <Item
        v-for="item, index in section3Items"
        :key="index"
        :contents="item"
        :mousepos="mousepos"
      />
    </div>
  </div>
</template>