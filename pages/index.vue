<template>
  <section class="container flex items-start justify-start flex-wrap pt-16">
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
</template>

<script>

import sketches from '~/components/sketches'

const elementPadding = 16;

export default {
  data() {
    return {
      sketches
    }
  },
  methods: {
    getSketch(index) { return this.sketches[index].sketch; }
  }
}
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
}

</style>
