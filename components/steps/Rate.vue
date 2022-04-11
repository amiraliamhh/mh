<template>
  <section
    class="min-h-[480px] sm:min-h-[360px] md:min-h-[340px] px-[10px] flex flex-col items-center appear"
  >
    <h2 class="step-heading">
      What's the max. rate you can pay off per month?
    </h2>
    <form
      class="mt-[5px] flex flex-col items-center w-full sm:w-[400px]"
      @submit.prevent="next"
    >
      <input
        type="text"
        class="w-[120px] h-[46px] md:h-[51.1px] border-[#bbbbbb] border-2 rounded-[3px] mb-[50px] text-cyan-900 text-[0.9rem] md:text-base p-[0.72rem] focus:bg-[#f5f7fa] outline-none"
        :value="`${rateSign}${maxRate} €`"
        @blur="rateChange"
      />
      <div class="w-full mb-[79.5px] sm:mb-[80px]">
        <div class="relative pb-[18px] w-full">
          <div class="relative w-full">
            <input
              :value="rate"
              class="range"
              type="range"
              min="0"
              max="10"
              @input="rangeChange"
            />
            <span
              class="absolute left-0 bottom-3 md:bottom-[10px] text-[#666] text-[0.81rem] md:text-[0.9rem] antialiased"
            >
              1.000&nbsp;€
            </span>
            <span
              class="absolute right-0 bottom-3 md:bottom-[10px] text-[#666] text-[0.81rem] md:text-[0.9rem] antialiased"
            >
              3.500&nbsp;€
            </span>
          </div>
          <div class="h-full w-full relative px-4">
            <div class="h-full w-full relative">
              <span class="bar">
                <span
                  class="absolute h-full bg-blue-500 rounded-tl-full rounded-bl-full"
                  :style="{ width: `${rate * 10}%` }"
                />
              </span>
            </div>
            <span
              class="absolute font-bold leading-[0.75] top-9 text-[0.81rem] px-[0.8rem] py-[0.7rem] h-8 text-white bg-[#5a5a5a] antialiased rounded-[3px]"
              :style="{
                left: `${rate * 10}%`,
                transform: `translateX(-${rate * 10}%)`,
              }"
            >
              {{ maxRate }}&nbsp;€
              <span class="arrow" :style="{ left: `${rate * 5 + 4}%` }" />
            </span>
          </div>
        </div>
      </div>
      <Submit class="sm:mt-1" @back="$emit('back')" />
    </form>
  </section>
</template>

<script>
import { storageMixin } from '@/mixins/storage'
import Submit from '@/components/shared/Submit.vue'

export default {
  components: {
    Submit,
  },
  mixins: [storageMixin],
  emits: ['back', 'next'],
  data() {
    const possibleValues = []
    for (let i = 0; i <= 10; i++) {
      possibleValues.push(1000 + i * 250)
    }

    return {
      rate: 4,
      possibleValues,
    }
  },
  computed: {
    maxRate() {
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 })
        .format(1000 + this.rate * 250)
        .replace(',', '.')
    },
    rateSign() {
      return this.rate === 0 ? '≤ ' : this.rate === 10 ? '≥ ' : ''
    },
  },
  mounted() {
    if (this.result.rate) {
      this.rate = this.findClosestIndex(this.result.rate.replace(/\D/g, ''))
    }
  },
  methods: {
    findClosestIndex(num) {
      const closest = this.possibleValues.reduce(function (prev, curr) {
        return Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev
      })
      return this.possibleValues.indexOf(closest)
    },
    rangeChange(e) {
      this.rate = Number(e.target.value)
    },
    rateChange(e) {
      const value = Number(e.target.value.replace(/\D/g, ''))
      this.rate = this.findClosestIndex(value)
      this.$forceUpdate()
    },
    next() {
      this.setItem('rate', this.maxRate)
      this.$emit('next')
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 36px;
  height: 36px;
  background: white;
  border: 2px solid #bbbbbb;
  border-radius: 50%;
  cursor: pointer;
  transition: all ease 0.5s;
}

.range {
  -webkit-appearance: none;
  appearance: none;
  @apply h-3 rounded-full bg-transparent w-full absolute left-0;
  z-index: 2;
  touch-action: none;

  &::-webkit-slider-thumb {
    @include thumb;
  }

  &::-moz-range-thumb {
    @include thumb;
  }

  &::-ms-thumb {
    @include thumb;
  }
}
.bar {
  @apply bg-white border border-[#bbbbbb] absolute h-3 w-full left-0 rounded-full;
}
.arrow {
  width: 0;
  height: 0;
  position: absolute;
  top: -7px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 8px solid #5a5a5a;
}
</style>
