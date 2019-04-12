<template>
  <section class="container flex items-start justify-start content-start flex-wrap pt-16">
    <div
      v-for="(sketch, index) in sketches"
      :key="index"
      class="w-1/5 p-4 cursor-pointer"
    >
      <nuxt-link
        :to="`/works/${sketch.slug}`"
        class="no-underline text-black"
      >
        <component
          :is="getSketch(index)"
          :use-static="true"
        />
      </nuxt-link>
    </div>
  </section>
</template>

<script>

import sketches from '~/components/sketches'

export default {
  data() {
    return {
      sketches: sketches.filter(({ published}) => (published)).reverse()
    }
  },
  methods: {
    getSketch(index) { return this.sketches[index].sketch }
  }
}
</script>

<style>

</style>
