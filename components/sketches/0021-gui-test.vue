<script>

import p5Base from '~/components/p5Base'
// import { colorBox } from '~/lib/p5/box'
// import { randomColor } from '~/lib/p5/color'
// import { gridIterate } from '~/lib/p5/gridIterator'
import lines from '~/lib/p5/lines'
import staticImage from './static.jpg';

const xSteps = 100
const ySteps = 16
const min = 1
const max = 400

export default {
  extends: p5Base,
  computed: {
    staticImage(){ return staticImage }
  },
  methods: {
    setup(sketch) {
      sketch.colorMode(sketch.RGB, 255, 255, 255, 1)
      const strokeColor = sketch.color(255, 255, 255, 0.1)
      sketch.stroke(strokeColor)
      sketch.background(0)
      sketch.fill(0, 0, 0)
      sketch.noLoop()
    },
    draw(sketch) {
      for (let j = min; j <= max; j++ ){
        for (let i = 0; i <= ySteps; i++){
          const y = (i / ySteps) * this.getHeight()
          lines.jagged({
            sketch,
            start: {x: 0, y},
            end: {x: this.getWidth(), y},
            segments: 6,
            random: this.getHeight()/ySteps
          })
        }
      }
    }
  }
}

</script>
