<template>
  <div class="h-screen w-full px-4 py-24">
    <component
      :is="sketch.sketch"
      :contain="true"
      :create-gui="true"
      :slug="sketch.slug"
    />
  </div>
</template>

<script>

import sketches from '~/components/sketches'

const getSketch = (params) => (
  sketches.find(({ slug }) => { return params.slug === slug })
)

export default {
  data() {
    return { sketch: getSketch(this.$route.params) }
  },
  validate({ params }) { return getSketch(params) }
}

</script>

<style>
</style>
