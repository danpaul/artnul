<script>

import p5Base from '~/components/p5Base'
import { colorBox } from '~/lib/p5/box'
import { divisions } from '~/lib/p5/color'
import { gridIterate } from '~/lib/p5/gridIterator'

const X_SEGMENTS = 8
const Y_SEGMENTS = 8
const NUMBER_OF_COLOR_DIVISIONS = 2

export default {
  extends: p5Base,
  methods: {
    setup(sketch) {
      sketch.background(0)
      sketch.stroke(0)
      sketch.fill(0)
      sketch.noLoop()
    },
    draw(sketch) {
      let current = 1
      gridIterate({
        sketch,
        upperLeftPoint: {x: 0, y: 0},
        lowerRightPoint: {x: this.getWidth(), y: this.getHeight()},
        xSegments: X_SEGMENTS,
        ySegments: Y_SEGMENTS,
        callback({ upperLeftPoint, lowerRightPoint }) {
          const d = divisions({
            sketch,
            initial: (current / (X_SEGMENTS * Y_SEGMENTS)) * 255,
            numberOfDivisions: NUMBER_OF_COLOR_DIVISIONS
          })
          colorBox({
            sketch,
            upperLeftPoint,
            lowerRightPoint,
            colors: d,
            even: true
          })
          current++
        }
      })
    }
  }
}

</script>
