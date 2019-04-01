<script>
import p5Base from '~/components/p5Base'
import { gridIterate } from '~/lib/p5/gridIterator'

const X_SEGMENTS = 8
const Y_SEGMENTS = 8

export default {
  extends: p5Base,
  methods: {
    setup(sketch) {
      sketch.background(0)
      sketch.stroke(255)
      sketch.fill(0)
      sketch.noLoop()
    },
    draw(sketch) {
      const { widthFromPercent } = this
      gridIterate({
        upperLeftPoint: { x: 0, y: 0 },
        lowerRightPoint: { x: this.getWidth(), y: this.getHeight() },
        xSegments: X_SEGMENTS,
        ySegments: Y_SEGMENTS,
        callback({ translate }) {
          sketch.ellipse(translate.x(0.5), translate.y(0.5), widthFromPercent(10/800))
        }
      })
    }
  }
}

</script>
