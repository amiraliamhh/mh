<template>
  <footer class="bg-[#555555] py-6 md:pt-4 text-neutral-100">
    <div class="container md:flex md:items-center md:justify-between">
      <div class="md:flex md:items-center">
        <small class="text-[0.78125rem]"
          >© {{ year }} Musterhaus.net GmbH</small
        >
        <a href="https://www.provenexpert.com/musterhaus-net/" target="_blank">
          <div class="flex items-baseline md:ml-5">
            <Stars :rate="4.5" />
            <span class="text-[0.8rem] text-gold-500 ml-1"
              >65 Bewertungen auf ProvenExpert.com</span
            >
          </div>
        </a>
      </div>
      <div class="text-[.78rem] mt-4">
        <template v-for="({ link, text, target }, index) in links">
          <a
            :key="link"
            :href="link"
            :target="target"
            :rel="target === '_blank' ? 'noopener noreferrer' : ''"
          >
            {{ text }}
          </a>
          <span
            v-if="index < links.length - 1"
            :key="index"
            class="text-[#6d6d6e]"
            >|</span
          >
        </template>
      </div>
    </div>
  </footer>
</template>

<script>
import Stars from './Stars.vue'

export default {
  components: {
    Stars,
  },
  data() {
    return {
      links: [
        {
          text: 'Impressum',
          link: 'https://www.musterhaus.net/impressum',
          target: '_blank',
        },
        {
          text: 'AGB',
          link: 'https://www.musterhaus.net/agb',
          target: '_blank',
        },
        {
          text: 'Datenschutz',
          link: 'https://www.musterhaus.net/datenschutz',
          target: '_blank',
        },
        {
          text: 'Cookie-Einstellungen',
          link: '#0',
          target: '_self',
        },
      ],
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>
