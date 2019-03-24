<template>
  <section class="container p-5">
    <no-ssr placeholder="Loading...">
      <vue-p5
        @setup="setup"
      >

      </vue-p5>
    </no-ssr>
  </section>
</template>

<script>
// import VueP5 from 'vue-p5';
const VueP5 = process.client ? require('vue-p5') : null;

export default {
  components: {
    VueP5
  },
  methods: {
    setup(sketch) {
      sketch.background('green');
      sketch.text('Hello p5!', 20, 20);
    }
  }
}
</script>

<style>

</style>
