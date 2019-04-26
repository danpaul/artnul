<script>

// https://monosnap.com/file/6cMXlT7vZGjk0Bk2YgMuaoCmrlmLl0
// https://monosnap.com/file/leuT4SwPDhZxsE6fbe8jZojl7tVgwv
// https://monosnap.com/file/OqgbtvUlepKFwb45Wm6vOwBx8gIixK
// https://monosnap.com/file/hC9OheLSFdViHU3dnTrVSx1T2NNiV3

import p5Base from '~/components/p5Base'
import lines from '~/lib/p5/lines'

let xSteps = 100
let ySteps = 16
let min = 1
let max = 400
let opacity = 0.1
let segments = 6
let strokeWeight = 1

export default {
  extends: p5Base,
  computed: {
    // staticImage(){ return staticImage }
  },
  methods: {
    setup(sketch) {
      this.settings.addRange('ySteps', 0, 200, ySteps, 1, (value) => {
        ySteps = value
      })
      this.settings.addRange('opacity', 0, 1.0, opacity, 0.01, (value) => {
        opacity = value
      })
      this.settings.addRange('segments', 1, 100, segments, 1, (value) => {
        segments = value
      })
      this.settings.addRange('strokeWeight', 1, 100, strokeWeight, 1, (value) => {
        strokeWeight = value
      })
      this.settings.saveInLocalStorage(this.slug + 'asdf')


      sketch.colorMode(sketch.RGB, 255, 255, 255, 1)
      // const strokeColor = sketch.color(255, 255, 255, opacity)
      // sketch.stroke(strokeColor)
      sketch.background(255)
      sketch.strokeWeight(strokeWeight)
      // sketch.fill(255, 255, 255)
      sketch.noLoop()
    },
    draw(sketch) {
      for (let j = min; j <= max; j++ ){
        for (let i = 0; i <= ySteps; i++){
          const y = (i / ySteps) * this.getHeight()
          const r = sketch.random
          const strokeColor = sketch.color(r(255), r(r(255)), r(r(r(255))), opacity)
          sketch.stroke(strokeColor)
          lines.jagged({
            sketch,
            start: {x: 0, y},
            end: {x: this.getWidth(), y},
            segments,
            random: this.getHeight()/ySteps
          })
        }
      }
    }
  }
}

</script>
