<script>
import p5Base from '~/components/p5Base'
import lines from '~/lib/p5/lines'
import staticImage from './static.jpg'

const RECURSION_LIMT = 4
const SEGMENTS = 8
const RANDOM_REDUCER = 0.7
const OPACITY = 60

const drawLines = ({ sketch, start, end, context, random }) => {
  const draw = ({ start, end, context }) => {
    drawLines({
      sketch,
      start,
      end,
      context: {
        recursionLevel: context.recursionLevel + 1,
        randomMultiply: context.randomMultiply * RANDOM_REDUCER
      },
      random
    })
  }
  lines.jagged({
    sketch,
    start,
    end,
    segments: SEGMENTS,
    random: random * context.randomMultiply,
    draw: context.recursionLevel >= RECURSION_LIMT ? null : draw,
    context
  })
}

export default {
  extends: p5Base,
  computed: {
    staticImage(){ return staticImage }
  },
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
        random: this.widthFromPercent(0.25),
        context: {
          recursionLevel: 0,
          randomMultiply: 1.0
        }
      })
    }
  }
}

</script>
