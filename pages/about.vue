<template>
  <div class="h-screen max-w-lg px-6 py-24" style="padding-top: 4.5rem;">
    <p>ArtNul features contemporary, square format, generative art created using the Processing programming language and its JavaScript port (P5.js). Works are both composed and curated using random generaters and tools to promote preffered compositions.</p>
    <p>
      The site and works are rapidly evolving.
      <nuxt-link to="/list">
        Signup for newsletter to receive occasional updates.
      </nuxt-link>
    </p>
  </div>
</template>

<script>

import sketches from '~/components/sketches'
const featured = sketches.find(({ featured }) => (featured))

export default {
  data() {
    return {
      sketches,
      featured
    }
  },
  methods: {
    getSketch(index) { return this.sketches[index].sketch }
  }
}
</script>

<style>

.container {
  /* margin: 0 auto; */
  min-height: 100vh;
  text-align: center;
}

</style>
