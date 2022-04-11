<template>
  <section class="min-h-[480px] sm:min-h-[340px] sm:pb-5 px-[10px] appear">
    <h2 class="step-heading !pb-[10px]">Where is/will be your property?</h2>
    <div class="w-full flex justify-center pt-[5px]">
      <img
        src="images/baufi-22-03-01.png"
        alt="location"
        width="32"
        height="32"
        class="w-[32%] h-[32%] sm:w-32 sm:h-32"
      />
    </div>
    <div class="w-full flex flex-col items-center">
      <form class="pt-[15px] w-full sm:w-[400px]" @submit.prevent="next">
        <label
          :class="[
            'relative block',
            { error: error, shake: error && !focused },
          ]"
        >
          <span
            :class="[
              'absolute m-auto top-[15px] bottom-0 left-[0.81rem] text-[#858585] text-[0.9rem] transition-all ease-linear duration-150',
              {
                focused: focused || postalCode,
              },
            ]"
          >
            Postal Code
          </span>
          <input
            v-model="postalCode"
            type="text"
            class="h-14 pt-5 w-full border-2 border-[#bbbbbb] rounded-[3px] px-[0.675rem] focus:bg-[#f5f7fa] outline-none font-semibold text-cyan-900"
            @input="validate"
            @focus="focused = true"
            @blur="
              (e) => {
                validate()
                focused = false
              }
            "
          />
          <div
            v-if="error"
            class="flex items-center antialiased py-[10px] text-[0.81rem] text-[#e46b7a]"
          >
            <svg
              class="mr-[5px]"
              xmlns="http://www.w3.org/2000/svg"
              width="14.44"
              height="19.44"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="200"
                y1="56"
                x2="56"
                y2="200"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="200"
                y1="200"
                x2="56"
                y2="56"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
            </svg>
            <span>Bitte geben Sie einen Ort an</span>
          </div>
        </label>
        <Submit
          class="pt-[15px]"
          :loading="loading"
          submit-text="Submit"
          @back="$emit('back')"
        />
      </form>
    </div>
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
  emits: ['next'],
  data() {
    return {
      focused: false,
      postalCode: '',
      error: false,
      loading: false,
    }
  },
  methods: {
    sleep(time = 2e3) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(), time)
      })
    },
    async next() {
      if (this.loading) return
      this.validate()
      if (!this.error) {
        this.loading = true
        await this.sleep()
        this.setItem('postalCode', this.postalCode)
        this.loading = false
        this.$emit('next')
      }
    },
    validate() {
      this.error = !this.postalCode
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-2px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(4px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-8px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(8px, 0, 0);
  }
}

.focused {
  transform: translateY(-10px);
  font-size: 0.8125rem;
}
.shake {
  animation: shake 0.5s linear both;
}
.error {
  input {
    border-color: #d0011b;
  }
}
</style>
