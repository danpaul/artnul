<template>
  <div class="h-screen w-full px-6 py-24" style="padding-top: 4.5rem;">
    <p>ArtNul is contemporary, square format, and generative.</p>
    <p>ArtNul is code as a first class medium.</p>
    <p>ArtNul directs randomness and curates.</p>
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
    getSketch(index) { return this.sketches[index].sketch; }
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
