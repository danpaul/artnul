<template>
  <div
    class="w-full"
    ref="wrapper">
    <no-ssr>
      <vue-p5
        v-if="initialized"
        @setup="setup"
        @draw="draw"
      >
      </vue-p5>
    </no-ssr>
  </div>
</template>

<script>

// import p5Base from '~/components/p5Base';
const VueP5 = process.client ? require('vue-p5') : null;
import lines from '~/lib/p5/lines';

export default {
  components: {
    VueP5
  },
  data() {
    return {
      initialized: false,
      containerWidth: 0,
      width: null
    }
  },
  mounted() {
    // asdf
    // console.log('this.$refs', this.$refs.wrapper.clientWidth)
    this.width = this.$refs.wrapper.clientWidth;
    this.initialized = true;
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(this.width, this.width);
      sketch.background(0);
      sketch.stroke(255);
      sketch.noLoop();
    },
    draw(sketch) {
      lines.jagged({
        start: {x: 0, y: 0},
        end: {x: this.width, y: this.width},
        segments: 10,
        random: 200,
        draw: ({ start, end }) => {
          lines.jagged({
            start,
            end,
            segments: 20,
            random: 10
          }, null, sketch );
        }
      }, null, sketch );
    }
  }
}

</script>

<style>

</style>
