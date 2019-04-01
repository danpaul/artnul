<template>
  <div
    ref="wrapper"
    class="w-full h-full"
  >
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
      />
    </no-ssr>
  </div>
</template>

<script>

const VueP5 = process.client ? require('vue-p5') : null

export default {
  components: {
    VueP5
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
    },
    contain: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      initialized: false,
      localWidth: null,
      localHeight: null,
      canvas: null
    }
  },
  computed: {
    staticImage() {
      return null
    }
  },
  mounted() {
    let width = this.width ? this.width : this.$refs.wrapper.clientWidth
    let height = this.height ? this.height : this.$refs.wrapper.clientHeight
console.log(width, height)
    if(this.contain) {
      const smallest = width < height ? width : height;
      width = smallest
      height = smallest
    }
    if(height === 0){ height = width }
    this.localWidth = width
    this.localHeight = height
    this.initialized = true
  },
  methods: {
    localSetup(sketch) {
      this.canvas = sketch.createCanvas(this.localWidth, this.localHeight)
      if(this.setup){ this.setup(sketch) }
    },
    localDraw(sketch) {
      if(this.draw){ this.draw(sketch); }
    },
    getWidth() { return this.localWidth },
    getHeight() { return this.localHeight },
    widthFromPercent(percent) { return this.getWidth() * percent },
    heightFromPercent(percent) { return this.getHeight() * percent }
  }
}

</script>
