<template>
  <div class="h-screen max-w-lg px-6 py-24" style="padding-top: 4.5rem;">
    <p>ArtNul features contemporary, square format, generative, digital art.</p>
    <p>Compositions have a focus on randomness, pattern, color, recursion and algorithmic design.</p>
    <nuxt-link to="/list">
      Signup for the newsletter to receive monthly updates regarding new works.
    </nuxt-link>
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
  min-height: 100vh;
  text-align: center;
}

</style>
