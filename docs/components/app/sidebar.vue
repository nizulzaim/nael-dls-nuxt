
<script lang="ts" setup>
import { SidebarMenuItem } from '~/types/sidebar-menu-item';

type Props = {
  data: SidebarMenuItem[]
}
const props = defineProps<Props>()

</script>

<template>
  <div>
    <div
      v-for="data in props.data"
      :key="data.href"
    >
      <RouterLink
        :to="data.href"
      >
        <div class="flex text-slate-500 my-2 text-menu">
          <Icon
            :name="data.icon"
            class="w-6 h-6 mr-6 my-1"
          />
          <div class="menu-item py-1 pr-1">
            {{ data.text }}
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  @apply font-semibold;

  .text-menu {
    @apply text-slate-800;
  }
}
</style>
