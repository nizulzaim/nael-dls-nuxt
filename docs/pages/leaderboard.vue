<script lang="ts" setup>
definePageMeta({
  layout: 'blank',
})

const windowEl = ref<HTMLElement | null | Window>(null)
const { y } = useScroll(windowEl)
const isBackgroundFill = ref(false)
watch(() => y.value, (val) => {
  isBackgroundFill.value = val > 1
})

onMounted(() => {
  nextTick(() => {
    windowEl.value = window
  })
})

const items = ref([
  {
    name: 'DE - Software Engineering & Testing',
    points: 30,
    class: "hover:bg-yellow-500 hover:text-white",
    iconClass: "text-yellow-500 group-hover:text-white",
  },
  {
    name: 'DE - Product Managements',
    points: 10,
    class: "hover:bg-gray-300",
    iconClass: "text-gray-400 group-hover:text-black",
  },
  {
    name: 'Enterprise Architecture',
    points: 5,
    class: "hover:bg-amber-600 hover:text-white",
    iconClass: "text-amber-600 group-hover:text-white",
  },
])
</script>

<template>
  <div class="relative from-primary-600 via-primary-600 to-primary-500 bg-gradient-to-tr">
    <div
      class="fixed w-screen h-screen top-0 left-0 z-10 opacity-20"
    >
      <PetronasDotBg />
    </div>
    <div
      class="sticky top-0 z-50 mb-10 transition-all"
      :class="[isBackgroundFill ? 'bg-primary-600 shadow-lg shadow-slate-400/10' : 'bg-transparent']"
    >
      <div
        class="max-w-7xl mx-auto flex gap-6 items-center py-10 group transition-all duration-300 ease origin-left"
        :class="[isBackgroundFill ? 'scale-50 py-2': 'scale-100']"
      >
        <div class="w-20">
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 161.02 198.66"
          >
            <g id="Design">
              <g>
                <path
                  class="fill-primary-50 group-hover:fill-white transition-all"
                  d="M103.61,132.02c0,20.42-16.55,36.97-36.97,36.97s-36.98-16.55-36.98-36.97,16.55-36.98,36.98-36.98,36.97,16.55,36.97,36.98"
                />
                <path
                  class="fill-primary-50 group-hover:fill-white transition-all"
                  d="M114.18,81.1L161.02,0H88.74c-20.15,.53-25.43,4.5-33.11,17.78,0,0-46.46,80.49-46.49,80.54C3.37,108.18,0,119.77,0,132.02c0,24.26,12.96,45.48,32.34,57.14,10.01,6.02,21.76,9.5,34.3,9.5,36.81,0,66.64-29.84,66.64-66.64,0-12.61-3.51-24.39-9.59-34.45l-9.51-16.47ZM89.11,17.04h42.37l-27.14,47.01-9.25-16.03-17.21-29.8c2.48-.85,5.85-1.19,11.23-1.19m-22.48,164.64c-12.18,0-23.35-4.4-31.99-11.68-10.81-9.11-17.68-22.74-17.68-37.99,0-9.18,2.48-17.79,6.82-25.16,0,0,42.67-73.89,42.83-74.19l16.66,28.8h0v.02l26.17,45.34s.01,.03,.01,.04c4.34,7.38,6.84,15.97,6.84,25.15,0,27.43-22.24,49.67-49.67,49.67"
                />
              </g>
            </g>
          </svg>
        </div>
        <div>
          <div class="text-primary-100/90 group-hover:text-white text-5xl font-medium font-poppins">
            Innovation POD
          </div>
          <div class="text-primary-100/90 group-hover:text-white text-3xl font-poppins">
            Leaderboard
          </div>
        </div>
      </div>
    </div>
    <div class="flex max-w-7xl mx-auto items-center h-full justify-items-center z-10 relative">
      <div class="w-full flex flex-col gap-10">
        <div class="grid grid-cols-3 gap-6">
          <div
            v-for="item, index in items"
            :key="item.name"
            class="col-span-1 h-full"
          >
            <div
              :class="item.class"
              class="transition-all cursor-pointer bg-white rounded-lg p-10 group shadow hover:shadow-lg h-full"
            >
              <div class="flex gap-10 items-center h-full">
                <div>
                  <Icon
                    name="pepicons-print:trophy"
                    :class="item.iconClass"
                    class="w-16 h-16 transition-all"
                  />
                  <div class="font-medium text-center text-lg">
                    #{{ index+1 }}
                  </div>
                </div>
                <div>
                  <div class="font-medium text-sm mb-2 uppercase text-gray-500">
                    Digital Engineering
                  </div>
                  <div class=" font-light text-lg mb-2">
                    {{ item.name }}
                  </div>
                  <div class="text-3xl font-bold">
                    {{ item.points }} pts
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <table class="w-full">
            <thead>
              <tr>
                <th>Rank</th>
                <th class="__left">
                  Department
                </th>
                <th>Ideation</th>
                <th>Ideation</th>
                <th>Ideation</th>
                <th>Ideation</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="key, index in 20"
                :key="index"
              >
                <td>#{{ index + 1 }}</td>
                <td class="__left">
                  <div class="text-sm uppercase font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-500 to-slate-400">
                    Digital Engineering
                  </div>
                  <div>Software Engineering & Testing</div>
                </td>
                <td>8</td>
                <td>10</td>
                <td>10</td>
                <td>2</td>
                <td class="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary-500 via-primary-600 to-purple-700">
                  30
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
table {
  @apply text-lg font-light;
  thead {
    @apply bg-gray-100;
    tr {
      th {
        @apply py-3 text-center text-base text-gray-500;
        &.__left {
          @apply text-left;
        }
      }
    }
  }
  tbody {
    tr {
      @apply border-t border-gray-100;
      td {
        @apply py-3 text-center text-base;
        &.__left {
          @apply text-left;
        }
      }
    }
  }
}
</style>