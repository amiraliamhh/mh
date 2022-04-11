<template>
  <div class="progress-bar">
    <span class="progress-bar__indicator" :style="{ width: `${progress}%` }" />
  </div>
</template>

<script>
export default {
  props: {
    // percentage
    progress: {
      type: Number,
      default: 25,
    },
  },
}
</script>

<style lang="scss" scoped>
.progress-bar {
  @apply w-full relative overflow-hidden;
  height: 3px;
  background-color: #eaeaeb;
  border-radius: 3px;
  &__indicator {
    @apply h-full bg-green-500 absolute left-0;
    transition: width 0.2s;
  }
}
</style>
