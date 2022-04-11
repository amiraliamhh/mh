<template>
  <header
    class="flex flex-col md:flex-row md:justify-between items-center py-[0.6rem] border-b border-b-[rgba(0,0,0,.05)]"
  >
    <div class="container flex justify-center md:justify-between sm:pb-[10px]">
      <div class="flex justify-center items-end leading-[1.02]">
        <Logo width="300" height="40.7" />
        <span
          class="text-[#666666] text-[1.35rem] font-light hidden md:block ml-[10px]"
          >Das Hausbauportal</span
        >
      </div>
      <div
        class="text-[#666] self-end text-xs leading-[19.2px] hidden md:block"
      >
        <span>Coding-Challenge:</span>
        <span class="mr-2 ml-[5px]">22/2</span>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/assets/icons/Musterhaus.svg?inline'

export default {
  components: {
    Logo,
  },
}
</script>
