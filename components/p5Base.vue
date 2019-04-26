<template>
  <div
    ref="wrapper"
    class="w-full h-full"
  >
    <img
      v-if="useStatic && staticImage && initialized && !forceHide"
      :src="staticImage"
      :style="{
        width: `${getWidth()}px`,
        height: `${getHeight()}px`
      }"
    >
    <no-ssr
      v-else
    >
      <vue-p5
        v-if="initialized && !forceHide"
        @setup="localSetup"
        @draw="localDraw"
      />
    </no-ssr>
  </div>
</template>

<script>

const VueP5 = process.client ? require('vue-p5') : null
const QuickSettings = process.client ? require('quicksettings') : null

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
    },
    createGui: {
      type: Boolean,
      default: false
    },
    slug: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      initialized: false,
      localWidth: null,
      localHeight: null,
      canvas: null,
      forceHide: false,
      resizeTimer: null,
      settings: null
    }
  },
  computed: {
    staticImage() {
      return null
    }
  },
  mounted() {
    this.setWidthAndHeight()
    if(process.client) {
      window.addEventListener('resize', this.resize, true)
    }
    if(this.createGui && QuickSettings) {
      this.settings = QuickSettings.create(this.getWidth() + 40, 80, 'Settings')
      // console.log(this.settings.saveInLocalStorage(this.slug))
      // this.settings.saveInLocalStorage(this.slug)
    }
    this.initialized = true
  },
  beforeDestroy() {
    if(process.client) {
      window.removeEventListener('resize', this.resize)
    }
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
    getHeight() {
      return this.localHeight
    },
    widthFromPercent(percent) { return this.getWidth() * percent },
    heightFromPercent(percent) { return this.getHeight() * percent },
    getWidthAndHeight() {
      let width = this.width ? this.width : this.$refs.wrapper.clientWidth
      let height = this.height ? this.height : this.$refs.wrapper.clientHeight
      if(this.contain) {
        const smallest = width < height ? width : height
        width = smallest
        height = smallest
      }
      if(height === 0){ height = width }
      return { width, height }
    },
    setWidthAndHeight() {
      const { width, height } = this.getWidthAndHeight()
      this.localWidth = width
      this.localHeight = height
    },
    resize() {
      window.clearTimeout(this.resizeTimer)
      this.resizeTimer = window.setTimeout(() => {
        this.forceHide = true
        this.$nextTick(() => {
          this.setWidthAndHeight()
          this.forceHide = false
        })
      }, 250)
    },
  }
}

</script>
