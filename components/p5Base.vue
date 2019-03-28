<template>
  <section>
    <no-ssr>
      <vue-p5
        v-if="initialized"
        @setup="setup"
        @draw="draw"
      >
      </vue-p5>
    </no-ssr>
  </section>
</template>

<script>

const VueP5 = process.client ? require('vue-p5') : null;

export default {
  components: {
    VueP5
  },
  props: {
    initialized: {
      type: Boolean,
      default: true
    }
  },
  // methods: {
  //   setup(sketch) { this.$emit('sketch', sketch); },
  //   draw(sketch) { { this.$emit('draw', draw); }
  // }
  // render(h) {
  //   return h(VueP5, {on: this});
  // }
  // asdf
}
</script>

<style>

</style>
