<template>
  <div class="w-full flex gap-[5px]">
    <button
      class="min-w-[2.95rem] h-[2.95rem] md:min-w-[3.25rem] md:h-[3.25rem] bg-[#bababb] rounded-[3px] flex justify-center items-center"
      :disabled="loading"
      @click="back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.4"
        height="14.4"
        viewBox="0 0 512 512"
      >
        <polyline
          points="244 400 100 256 244 112"
          style="
            fill: none;
            stroke: white;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 48px;
          "
        ></polyline>
        <line
          x1="120"
          y1="256"
          x2="412"
          y2="256"
          style="
            fill: none;
            stroke: white;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 48px;
          "
          fill="red"
        ></line>
      </svg>
    </button>
    <button
      type="submit"
      :class="[
        `w-full text-white bg-green-400 px-[16.4px] md:px-[18px] rounded-[3px]
        flex items-center justify-between active:opacity-80 select-none`,
        {
          '!pl-2 opacity-[.75]': loading,
        },
      ]"
    >
      <div class="flex items-center">
        <svg
          v-if="loading"
          class="mr-3"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewBox="0 0 40 40"
          enable-background="new 0 0 40 40"
          xml:space="preserve"
        >
          <path
            opacity="0.2"
            fill="white"
            d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
          ></path>
          <path
            fill="white"
            d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 20 20"
              to="360 20 20"
              dur="0.5s"
              repeatCount="indefinite"
            ></animateTransform>
          </path>
        </svg>
        <span class="text-[0.9rem] md:text-base antialiased font-semibold">
          {{ submitText }}
        </span>
      </div>
      <svg
        class="rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        width="14.4"
        height="14.4"
        viewBox="0 0 512 512"
      >
        <polyline
          points="244 400 100 256 244 112"
          style="
            fill: none;
            stroke: white;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 48px;
          "
        ></polyline>
        <line
          x1="120"
          y1="256"
          x2="412"
          y2="256"
          style="
            fill: none;
            stroke: white;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 48px;
          "
          fill="red"
        ></line>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    submitText: {
      type: String,
      default: 'Next',
    },
    loading: {
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
