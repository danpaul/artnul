<script>

// Examples
// https://monosnap.com/file/pzZ0GokUrv3uu7AxyFcE0mctkfgkKO
// https://monosnap.com/file/YV7zTGj3MDWlQ30k9RdcNGs3tUVz8a
// https://monosnap.com/file/xbqwYAxw4TcjRCQGViRmKJ59Jeb9Wg
// https://monosnap.com/file/CGR20xNTWOl20lvnOoY7kefB38sUI5
// https://monosnap.com/file/5K6QVrOTGUeq261chRIJa8BXiSqSuH
// https://monosnap.com/file/kk0jzdEjlUIhZXTu3gO8pqYkIJpRw9
// https://monosnap.com/file/6t50a5HNBpK7G4DlJfXXeKLyWGGU3S
// https://monosnap.com/file/BhgUsOpwAJZMVNCeT6ZQ01jvaF9FWZ

import p5Base from '~/components/p5Base'

import { colorBox } from '~/lib/p5/box'
import { gridIterate, gridElementClicked } from '~/lib/p5/gridIterator'
import { equalRandom } from '~/lib/p5/random'
import staticImage from './static.png'

// const CANVAS_SIZE = 800;
const X_SEGMENTS = 4
const Y_SEGMENTS = 4
const NUMBER_OF_COLOR_DIVISIONS = 4
const MAX_COLOR_RANDOM = 80
const gridColors = []
let selectedColor = null

const randomColorValue = (value) => {
    return (value + equalRandom(MAX_COLOR_RANDOM)) % 255
}

const reDraw = ({sketch, width, height }) => {
  gridIterate({
    upperLeftPoint: {x: 0, y: 0},
    lowerRightPoint: { x: width, y: height },
    xSegments: X_SEGMENTS,
    ySegments: Y_SEGMENTS,
    callback({ row, column, upperLeftPoint, lowerRightPoint }) {
      let colors = []
      if(row === 0 && column === 0 && selectedColor){
        colors = selectedColor
      } else {
        for(let i = 0; i < NUMBER_OF_COLOR_DIVISIONS; i++){
          if(selectedColor){
            const currentColor = selectedColor[i]
            const r = randomColorValue(sketch.red(currentColor))
            const g = randomColorValue(sketch.green(currentColor))
            const b = randomColorValue(sketch.blue(currentColor))
            colors.push(sketch.color(r,g,b))
          } else {
            colors.push(sketch.color(sketch.random(255), sketch.random(255), sketch.random(255)))
          }
        }
      }
      if(!gridColors[column]){ gridColors[column] = [] }
      gridColors[column][row] = colors
      colorBox({
        upperLeftPoint,
        lowerRightPoint,
        colors,
        even: true,
        sketch
      })
    }
  })
}


export default {
  extends: p5Base,
  computed: {
    staticImage(){ return staticImage }
  },
  methods: {
    setup(sketch) {
      sketch.background(255)
      sketch.stroke(0)
      sketch.fill(0)
      sketch.noLoop()
      this.canvas.mousePressed(() => {
        const clicked = gridElementClicked(sketch.mouseX, sketch.mouseY, this.getWidth(), this.getHeight(), X_SEGMENTS, Y_SEGMENTS)
        selectedColor = gridColors[clicked[0]][clicked[1]];
        reDraw({ sketch, width: this.getWidth(), height: this.getHeight() })
      })
    },
    draw(sketch) { reDraw({ sketch, width: this.getWidth(), height: this.getHeight() }) }
  }
}

</script>
