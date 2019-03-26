<template>
  <section>
    <no-ssr>
      <vue-p5
        @setup="localSetup"
        @draw="localDraw"
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
    canvasWidth: {
      type: Number,
      default: process.client ? window.innerWidth : 0
    },
    canvasHeight: {
      type: Number,
      default: process.client ? window.innerHeight : 0
    }
  },
  methods: {
    localSetup(sketch) {
      if(!process.client){ return; }
      if(this.setup){ this.setup(sketch); }
    },
    localDraw(sketch) {
      if(!process.client){ return; }
      if(this.draw){ this.draw(sketch); }
    }
  },
  render(h) {
    return h(VueP5, {on: this});
  }
}
</script>

<style>

</style>
