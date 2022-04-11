<script>
import Progress from './Progress.vue'

export default {
  components: {
    Progress,
  },
  props: {
    activeStep: {
      type: Number,
      default: 1,
    },
    totalSteps: {
      type: Number,
      default: 4,
    },
  },
  emits: ['back'],
  render(h) {
    return h(
      'section',
      {
        class:
          'bg-neutral-100 relative pt-[35px] md:container max-w-[540px] sm:mb-[60px] w-full',
      },
      [
        h('div', {
          class: 'arrow-down',
        }),
        h(
          'div',
          {
            class: 'container md:px-0 px-[15px] flex flex-col items-center',
          },
          [
            h(Progress, {
              props: {
                progress: (100 / this.totalSteps) * this.activeStep,
              },
              class: 'sm:mt-[30px]',
            }),
            h(
              'div',
              {
                class: 'mt-[17px] sm:w-[540px] md:w-[550px]',
              },
              [this.$slots[`step-${this.activeStep}`]]
            ),
          ]
        ),
      ]
    )
  },
}
</script>

<style lang="scss" scoped>
.arrow-down {
  @apply absolute top-0 h-0 w-0 m-auto left-0 right-0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 20px solid white;
}
</style>
