<script>
import p5Base from '~/components/p5Base'
import { colorBox } from '~/lib/p5/box'
import { randomColor } from '~/lib/p5/color'

const NUMBER_OF_BOXES = 1000

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
      const colors = []
      for(let i = 0; i < NUMBER_OF_BOXES; i++){ colors.push(randomColor({ sketch })) }
      colorBox({
        sketch,
        upperLeftPoint: { x: 0, y: 0 },
        lowerRightPoint: { x: this.getWidth(), y: this.getHeight() },
        colors,
        even: true,
        // reduce: REDUCE
        // asdf
      })
    }
  }
}

</script>
