<script lang="ts" setup>
definePageMeta({
  layout: 'content',
  menuItems: [
    {
      text: "Introduction",
      href: '/documentations',
      icon: 'ic:outline-info'
    },
    {
      text: "Base Style",
      href: '/introduction',
      icon: 'ic:outline-style'
    },
    {
      text: "Components",
      href: '/documentations/components',
      icon: 'lucide:box',
      children: [
        {
          text: "Badge",
          href: '/badges'
        }, {
          text: "Button",
          href: '/buttons/'
        }
      ]
    },
    {
      text: "Patterns",
      href: '/introduction/installation',
      icon: 'mdi:lock-pattern'
    },
    {
      text: "Templates",
      href: '/introduction/installation',
      icon: 'ri:layout-2-line'
    }
  ]
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>