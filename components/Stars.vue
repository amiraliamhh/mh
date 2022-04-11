<template>
  <div>
    <span v-for="i in total" :key="i" class="star relative">
      <span
        class="absolute h-full left-0 overflow-hidden"
        :style="{ width: width(i) }"
      >
        <span class="star absolute left-0 text-gold-500" />
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    rate: {
      type: Number,
      default: 5,
    },
    total: {
      type: Number,
      default: 5,
    },
  },
  methods: {
    width(index) {
      if (this.rate >= index) {
        return '100%'
      }
      if (index > this.rate + 1) {
        return '0%'
      }
      return `${(1 - (index - this.rate)) * 100}%`
    },
  },
}
</script>

<style lang="scss" scoped>
.star {
  &::before {
    content: '\2605';
  }
}
</style>
