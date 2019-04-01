<script>
import p5Base from '~/components/p5Base'
import lines from '~/lib/p5/lines';

const RECURSION_LIMT = 4
const SEGMENTS = 4
const RANDOM = 200
const RANDOM_REDUCER = 0.4
const OPACITY = 120

const drawLines = ({ sketch, start, end, context }) => {
  const draw = ({ start, end, context }) => {
    drawLines({
      sketch,
      start,
      end,
      context: {
        recursionLevel: context.recursionLevel + 1,
        randomMultiply: context.randomMultiply * RANDOM_REDUCER
      }
    })
  }
  lines.jagged({
    sketch,
    start,
    end,
    segments: SEGMENTS,
    random: RANDOM * context.randomMultiply,
    draw: context.recursionLevel >= RECURSION_LIMT ? null : draw,
    context
  })
}

export default {
  extends: p5Base,
  methods: {
    setup(sketch) {
      sketch.background(0)
      sketch.stroke(255, OPACITY)
      sketch.noLoop()
    },
    draw(sketch) {
      drawLines({
        sketch,
        start: {x: 0, y: 0},
        end: {x: this.getWidth(), y: this.getHeight()},
        context: {
          recursionLevel: 0,
          randomMultiply: 1.0
        }
      })
    }
  }
}

</script>
