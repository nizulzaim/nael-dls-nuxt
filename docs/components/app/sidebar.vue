
<script lang="ts" setup>
import { SidebarMenuItem } from '~/types/sidebar-menu-item';
import { join } from '@fireflysemantics/join'
type Props = {
  data: SidebarMenuItem[]
}
const route = useRoute()
const props = withDefaults(defineProps<Props>(), {})
const internalData = ref<(SidebarMenuItem & { open: boolean })[]>(
  props.data.map(i => (
    { ...i, open: route.matched.some(({ path }) => i.children?.some(({ href }) => join(i.href ?? '', href).includes(path))) })
  )
)

watch(() => props.data, () => {
  internalData.value = 
  props.data.map(i => (
    { ...i, open: route.matched.some(({ path }) => i.children?.some(({ href }) => join(i.href ?? '', href).includes(path))) })
  )
})
</script>

<template>
  <div>
    <div
      v-for="item in internalData"
      :key="item.href"
    >
      <div class="flex flex-col main-item">
        <div class="my-2 text-menu justify-between">
          <div
            v-if="item.children"
            class="cursor-pointer select-none flex justify-between"
            @click="item.open = !item.open"
          >
            <div class="flex">
              <Icon
                :name="item.icon"
                class="w-6 h-6 mr-6 my-1"
              />
              <div class="menu-item py-1 pr-1">
                {{ item.text }}
              </div>
            </div>
            <Icon
              :name="item.open ? 'ic:round-unfold-less' : 'ic:round-unfold-more'"
              class="w-6 h-6 mr-6 my-1 cursor-pointer"
            />
          </div>
          <RouterLink
            v-else
            :to="item.href"
            class="cursor-pointer select-none"
          >
            <div class="flex">
              <Icon
                :name="item.icon"
                class="w-6 h-6 mr-6 my-1"
              />
              <div class="menu-item py-1 pr-1">
                {{ item.text }}
              </div>
            </div>
          </RouterLink>
        </div>

        <div
          class="subitem-wrapper"
          :class="{ open: item.open }"
        >
          <div
            v-for="subitem in item.children"
            :key="subitem.href"
            class="flex flex-col subitem border-l-2 ml-12"
          >
            <RouterLink
              class="text-slate-500 py-1"
              :to="join(item.href ?? '', subitem.href)"
            >
              {{ subitem.text }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-item {
  &>.router-link-exact-active {

    .text-menu {
      @apply text-primary-900 font-bold;
    }
  }

  &:has(.router-link-exact-active) {
    .text-menu {
      @apply text-primary-900 font-bold;
    }
  }
}

.subitem-wrapper {
  @apply transition-all max-h-0 overflow-hidden duration-150 ease-in-out opacity-0;

  .subitem {
    @apply pl-4;
    & > .router-link-exact-active {
      @apply font-semibold text-primary-800 border-l-2 border-primary-800 -ml-[calc(1rem+2px)] pl-4;
    }
  }

  &.open {
    @apply duration-500 opacity-100;
    max-height: 1000px;
  }
}
</style>
