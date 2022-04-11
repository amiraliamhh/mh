<template>
  <div class="bg-white">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
body {
  background-color: #555;
  margin: 0;
}
</style>
