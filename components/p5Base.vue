<template>
  <div
    class="w-full"
    ref="wrapper">
    <img
      v-if="useStatic && staticImage"
      :src="staticImage"
      class="w-full h-full"
    >
    <no-ssr
      v-else
    >
      <vue-p5
        v-if="initialized"
        @setup="localSetup"
        @draw="localDraw"
      >
      </vue-p5>
    </no-ssr>
  </div>
</template>

<script>

const VueP5 = process.client ? require('vue-p5') : null;

export default {
  components: {
    VueP5
  },
  data() {
    return {
      initialized: false,
      localWidth: null,
      localHeight: null
    }
  },
  computed: {
    staticImage() {
      return null;
    }
  },
  mounted() {
    this.localWidth = this.width ? this.width : this.$refs.wrapper.clientWidth;
    this.localHeight = this.height ? this.height : this.$refs.wrapper.clientWidth;
    this.initialized = true;
  },
  props: {
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    useStatic: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    localSetup(sketch) {
      sketch.createCanvas(this.localWidth, this.localHeight);
      if(this.setup){ this.setup(sketch); }
    },
    localDraw(sketch) {
      if(this.draw){ this.draw(sketch); }
    },
    getWidth() { return this.localWidth; },
    getHeight() { return this.localHeight; },
    widthFromPercent(percent) { return this.getWidth() * percent },
    heightFromPercent(percent) { return this.getHeight() * percent }
  }
}

</script>
