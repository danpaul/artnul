<script>

import p5Base from '~/components/p5Base'
import { colorBox } from '~/lib/p5/box'
import { randomColor } from '~/lib/p5/color'
import { gridIterate } from '~/lib/p5/gridIterator'

// const CANVAS_SIZE = 800;
const NUMBER_OF_BOXES = 2
const X_SEGMENTS = 2
const Y_SEGMENTS = 2
const RECURSE_PROBABILITY = 0.8
const ITERATION_LIMIT = 10
const RGB = [
  [154, 15, 122],
  [222, 13, 63],
  [82, 60, 72],
  [174, 30, 183]
];
const COLOR_PALETTE = [[173,25,156,255],[229,35,40,255],[47,58,50,255],[184,45,153,255],[166,7,174,255],[191,65,36,255],[58,58,68,255],[203,35,148,255],[169,23,163,255],[204,64,44,255],[61,95,57,255],[166,24,153,255],[213,0,125,255],[6,73,3,255],[65,89,52,255],[169,15,146,255],[156,0,123,255],[225,1,59,255],[82,60,72,255],[176,9,185,255],[148,17,121,255],[226,73,26,255],[19,97,50,255],[144,57,189,255],[164,29,138,255],[222,48,46,255],[27,26,18,255],[208,37,115,255],[134,46,155,255],[231,54,69,255],[76,68,12,255],[149,50,158,255],[175,0,170,255],[226,61,23,255],[79,74,42,255],[197,27,144,255],[146,0,176,255],[234,37,64,255],[57,84,31,255],[172,35,136,255],[185,24,175,255],[213,29,13,255],[27,49,38,255],[196,36,170,255],[156,0,123,255],[200,56,76,255],[27,74,19,255],[161,62,189,255],[178,38,179,255],[217,41,64,255],[34,76,77,255],[186,15,159,255],[190,64,150,255],[251,0,6,255],[75,88,44,255],[164,41,141,255],[140,0,157,255],[214,24,51,255],[33,97,28,255],[173,31,140,255],[143,20,122,255],[236,70,42,255],[38,51,87,255],[189,45,116,255]]

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
        const colors = []
        // const rgbColorValues = [
        //   [154, 15, 122],
        //   [222, 13, 63],
        //   [82, 60, 72],
        //   [174, 30, 183]
        // ]

        for (let i = 0; i < NUMBER_OF_BOXES; i++) {
          const colorArray = RGB[i];
          colors.push(sketch.color(colorArray[0], colorArray[1], colorArray[2]))
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
