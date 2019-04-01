<template>
  <div class="h-screen w-full px-4 py-24" style="padding-top: 4.5rem;">
  <!-- <div class="container px-6 h-screen" style="padding-top: 4.5rem;"> -->
    <component
      :is="featured.sketch"
      v-if="featured"
      :contain="true"
      :use-static="true"
    />
    <section v-if="false" class="flex items-start justify-start content-start flex-wrap">
      <div
        v-for="(sketch, index) in sketches"
        :key="index"
        class="w-1/5 p-4"
      >
        <component
          :is="getSketch(index)"
          :use-static="true"
        />
      </div>
    </section>
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
