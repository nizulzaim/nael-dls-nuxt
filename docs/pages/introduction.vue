<script lang="ts" setup>
definePageMeta({
  layout: 'content',
  menuItems: [
    {
      text: "Introduction",
      href: '/introduction',
      icon: 'mdi:information-outline'
    },
    {
      text: "Installation",
      href: '/introduction/installation',
      icon: 'icon-park-outline:install'
    }
  ]
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>