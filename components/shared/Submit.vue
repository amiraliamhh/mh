<template>
  <div class="w-full flex gap-[5px]">
    <button
      class="min-w-[2.95rem] h-[2.95rem] md:min-w-[3.25rem] md:h-[3.25rem] bg-[#bababb] rounded-[3px] flex justify-center items-center"
      :disabled="loading"
      @click="back"
    >
      <ArrowLeft />
    </button>
    <button
      type="submit"
      :class="[
        `w-full text-white bg-green-400 px-[16.4px] md:px-[18px] rounded-[3px]
        flex items-center justify-between active:opacity-80 select-none`,
        {
          '!pl-2 opacity-[.75]': loading || done,
        },
      ]"
    >
      <div class="flex items-center">
        <Done v-if="done" />
        <Loading v-else-if="loading" />
        <span class="text-[0.9rem] md:text-base antialiased font-semibold">
          {{ submitText }}
        </span>
      </div>
      <ArrowRight />
    </button>
  </div>
</template>

<script>
import Loading from '@/assets/icons/loading.svg?inline'
import ArrowRight from '@/assets/icons/arrow-right.svg?inline'
import ArrowLeft from '@/assets/icons/arrow-left.svg?inline'
import Done from '@/assets/icons/done.svg?inline'

export default {
  components: {
    Loading,
    ArrowRight,
    ArrowLeft,
    Done,
  },
  props: {
    submitText: {
      type: String,
      default: 'Next',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['back'],
  methods: {
    back() {
      this.$emit('back')
    },
  },
}
</script>
