<script lang="ts" setup>
import { SidebarMenuItem } from '~/types/sidebar-menu-item';

const route = useRoute()
const menuItems = computed<SidebarMenuItem[] | undefined>(() => route.meta.menuItems)

</script>

<template>
  <div>
    <AppHeader />
    <div class="max-w-7xl mx-auto mt-10">
      <div class="grid grid-cols-12 gap-x-10">
        <div class="col-span-3">
          <div class="h-96 sticky top-32">
            <AppSidebar
              v-if="menuItems"
              :data="menuItems"
            />
          </div>
        </div>
        <div class="col-span-9 bg-white p-10 rounded-xl shadow-xl shadow-slate-400/10 mb-10">
          <slot />
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>