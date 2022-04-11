<template>
  <section
    class="min-h-[480px] sm:min-h-[360px] md:min-h-[340px] pt-[3px] px-[10px] w-full flex justify-center appear"
  >
    <div class="w-full md:w-[400px]">
      <p
        class="my-4 text-[0.9rem] md:text-base text-[#666] antialiased leading-[0.9rem] md:leading-[1.35rem]"
      >
        Status: {{ result.statusText }}
      </p>
      <p
        class="my-4 text-[0.9rem] md:text-base text-[#666] antialiased leading-[0.9rem] md:leading-[1.35rem]"
      >
        Monthly rate: {{ result.rate }}
      </p>
      <p
        class="my-4 text-[0.9rem] md:text-base text-[#666] antialiased leading-[0.9rem] md:leading-[1.35rem]"
      >
        Postal code: {{ result.postalCode }}
      </p>
    </div>
  </section>
</template>

<script>
import { storageMixin } from '@/mixins/storage'

export default {
  mixins: [storageMixin],
}
</script>
