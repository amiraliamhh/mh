<template>
  <section
    class="min-h-[480px] md:min-h-[340px] px-[10px] md:px-0 sm:flex sm:items-center sm:flex-col appear"
  >
    <h2 class="step-heading">What's your current status?</h2>
    <div
      class="flex flex-wrap md:flex-nowrap justify-center w-full sm:w-[370px] md:w-full"
    >
      <div
        v-for="({ title, image }, index) in items"
        :key="title"
        :class="[
          'w-1/2 md:w-[183.3px] md:!pr-[10px] pb-[10px] md:!pl-0 cursor-pointer',
          {
            'pr-[5px]': !(index % 2),
            'pl-[5px]': index % 2,
            '!px-[2.5px]': index === items.length - 1,
            selected: index === selected,
          },
        ]"
        @click="select(index)"
      >
        <div
          class="status__container border-2 border-[#bbbbbb] rounded-[5px] bg-white overflow-hidden h-full flex flex-col hover:border-blue-500"
        >
          <img
            :src="image"
            :alt="title"
            width="170"
            height="126"
            class="pb-[8%] w-full"
          />
          <div class="flex items-center h-full py-[2px]">
            <p
              class="status__title opacity-95 text-center font-semibold break-words leading-[15.55px] pb-[15px] text-[0.81rem] md:text-[0.9rem] tracking-[-0.288px] text-[#666666] antialiased"
            >
              {{ title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { storageMixin } from '@/mixins/storage'

export default {
  mixins: [storageMixin],
  emits: ['next'],
  data() {
    return {
      selected: null,
      items: [
        {
          title: 'Property secured, construction company needed',
          image: 'images/baufi-22-01-01.png',
        },
        {
          title: 'Property reserved or in transfer',
          image: 'images/baufi-22-01-02.png',
        },
        {
          title: 'Trying to understand my budget',
          image: 'images/baufi-22-01-03.png',
        },
      ],
    }
  },
  mounted() {
    if (this.result.status) {
      this.selected = Number(this.result.status)
    }
  },
  methods: {
    select(index) {
      this.selected = index
      this.setItem('status', String(this.selected))
      this.setItem('statusText', this.items[this.selected].title)
      this.$emit('next')
    },
  },
}
</script>

<style lang="scss" scoped>
.status__title {
  hyphens: auto;
}
.selected {
  img {
    @apply bg-blue-500;
  }
  .status {
    &__title {
      @apply text-white bg-blue-500;
    }
    &__container {
      @apply bg-blue-500 border-blue-500;
    }
  }
}
</style>
