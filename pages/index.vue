<template>
  <main class="w-full flex flex-col items-center">
    <h1
      class="text-cyan-900 font-extrabold text-[1.4rem] md:text-[1.8rem] text-center pt-[11px] md:pt-[30px] leading-[1.3] pb-4 sm:mb-5 sm:mt-5 md:mt-0"
    >
      Coding-Challenge
    </h1>
    <Stepper :active-step="activeStep" @back="back">
      <template #step-1>
        <Status @next="next" />
      </template>
      <template #step-2>
        <Rate @back="back" @next="next" />
      </template>
      <template #step-3>
        <Location @back="back" @next="next" />
      </template>
      <template #step-4>
        <Result />
      </template>
    </Stepper>
  </main>
</template>

<script>
import Stepper from '@/components/Stepper.vue'
import Status from '@/components/steps/Status.vue'
import Rate from '@/components/steps/Rate.vue'
import Location from '@/components/steps/Location.vue'
import Result from '~/components/steps/Success.vue'

export default {
  components: {
    Stepper,
    Status,
    Rate,
    Location,
    Result,
  },
  data() {
    return {
      activeStep: 3,
    }
  },
  mounted() {
    window.addEventListener('popstate', this.onPopState)
  },
  destroyed() {
    window.removeEventListener('popstate', this.onPopState)
  },
  methods: {
    next() {
      this.activeStep += 1
      window.history.pushState(
        {
          step: this.activeStep,
        },
        ''
      )
    },
    back() {
      this.activeStep -= 1
      window.history.back()
    },
    onPopState() {
      this.activeStep = window.history.state?.step || 1
    },
  },
}
</script>
