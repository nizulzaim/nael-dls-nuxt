<script lang="ts" setup>
const data = ref([
  {
    text: 'Consistent Navigation',
  },
  {
    text: 'Use of colour',
  },
  {
    text: 'Sensory Characteristics',
  },
  {
    text: 'Heading & Labels',
  },
  {
    text: 'Consistent Identification',
  },
  {
    text: 'Meaningful Message',
  }
])
</script>

<template>
  <div class="max-w-7xl mx-auto mt-20 pb-20">
    <div class="grid grid-cols-12 gap-8 items-center">
      <div class="col-span-5">
        <div class="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-primary-800 to-accent-700">
          Perceivable, operable, understandable & robust
        </div>
        <div class="text-lg">
          Our components comply with the Digital Services Standards (DSS) where applicable and WCAG.
        </div>
      </div>
      <div class="col-span-7">
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="d, index in data"
            :key="index"
            class="rounded-lg shadow-lg shadow-gray-300/30 bg-white p-8 border border-slate-100"
          >
            <div class="flex">
              <div class="text-lg text-slate-600 font-medium">
                {{ d.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>