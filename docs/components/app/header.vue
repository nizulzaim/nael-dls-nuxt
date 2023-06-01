<script lang="ts" setup>
const el = ref<HTMLElement | null | Window>(null)
const { y } = useScroll(el)
const isBackgroundWhite = ref(false)
onMounted(() => {
  nextTick(() => {
    el.value = window
  })
})

watch(() => y.value, (val) => {
  isBackgroundWhite.value = val > 10
})
</script>

<template>
  <div
    class="border-slate-300 h-20 sticky z-50 w-full top-0 transition-all duration-500"
    :class="[isBackgroundWhite ? 'background-header shadow-lg shadow-slate-400/10' : 'bg-transparent']"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between h-full">
      <RouterLink to="/">
        <img
          src="~/assets/img/logo-normal.png"
          class="h-6"
          alt=""
        >
      </RouterLink>
      <div class="gap-x-6 flex">
        <RouterLink
          to="/introduction"
          class="menu-item"
        >
          Introduction
        </RouterLink>
        <RouterLink
          to="/components"
          class="menu-item"
        >
          Components
        </RouterLink>
        <RouterLink
          to="/patterns"
          class="menu-item"
        >
          Patterns
        </RouterLink>
        <RouterLink
          to="/templates"
          class="menu-item"
        >
          Templates
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-item {
  @apply text-slate-600 px-4 py-2 hover:bg-gray-200/60 hover:text-slate-700 rounded text-sm transition-all font-medium;
}

.background-header {
  transform: translateZ(0);
  -webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(180%) blur(5px);
  background: hsla(0, 0%, 100%, .8);
}

.menu-item.router-link-active {
  @apply bg-gradient-to-tr from-slate-200/60 to-slate-400/30 text-slate-700;
}
</style>