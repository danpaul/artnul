<script>

import p5Base from '~/components/p5Base'
import { colorBox } from '~/lib/p5/box'
import { randomColor } from '~/lib/p5/color'
import { gridIterate } from '~/lib/p5/gridIterator'
import { equalRandom } from '~/lib/p5/random'

// const CANVAS_SIZE = 800;
const NUMBER_OF_BOXES = 3
const X_SEGMENTS = 2
const Y_SEGMENTS = 2
const RECURSE_PROBABILITY = 0.66
const ITERATION_LIMIT = 12

const MAX_COLOR_RANDOM = 120

const colorSet = [
  [207, 73, 41],
  [203, 50, 56],
  [126, 89, 27],
  [44, 96, 125]
]


const randomColorValue = (value) => {
  return (value + equalRandom(MAX_COLOR_RANDOM)) % 255
}

const recurseIterate = ({ sketch, xSegments, ySegments, upperLeftPoint, lowerRightPoint }, iterationLevel = 0) => {
  gridIterate({
    sketch,
    upperLeftPoint,
    lowerRightPoint,
    xSegments,
    ySegments,
    callback({ translate, upperLeftPoint, lowerRightPoint }) {
      if (Math.random() < RECURSE_PROBABILITY && iterationLevel < ITERATION_LIMIT) {
        recurseIterate({
          sketch,
          upperLeftPoint: {
            x: translate.x(0),
            y: translate.y(0)
          },
          lowerRightPoint: {
            x: translate.x(1.0),
            y: translate.y(1.0)
          },
          xSegments,
          ySegments
        }, iterationLevel += 1)

      } else {
        const colors = [];
        for (let i = 0; i < NUMBER_OF_BOXES; i++) {
          const currentColor = colorSet[i];
          if(i === 0){
            colors.push(0);
            // colors.push(sketch.color(currentColor[0], currentColor[1], currentColor[2]));
          } else {
            const r = randomColorValue(sketch.red(currentColor))
            const g = randomColorValue(sketch.green(currentColor))
            const b = randomColorValue(sketch.blue(currentColor))
            colors.push(sketch.color(r,g,b))
          }

          // colors.push(randomColor({ sketch }))
        }
        colorBox({
          sketch,
          upperLeftPoint,
          lowerRightPoint,
          colors,
          even: true
        })
      }
    }
  })
}

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
      recurseIterate({
        sketch,
        upperLeftPoint: { x: 0, y: 0 },
        lowerRightPoint: { x: this.getWidth(), y: this.getHeight() },
          xSegments: X_SEGMENTS,
          ySegments: Y_SEGMENTS
      })
    }
  }
}

</script>
