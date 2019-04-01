<script>

import p5Base from '~/components/p5Base'
import lines from '~/lib/p5/lines'

export default {
  extends: p5Base,
  methods: {
    setup(sketch) {
      sketch.background(0)
      sketch.stroke(255)
      sketch.noLoop()
    },
    draw(sketch) {
      lines.jagged({
        sketch,
        start: {x: 0, y: 0},
        end: {x: this.getWidth(), y: this.getHeight()},
        segments: 10,
        random: 200,
        draw: ({ start, end }) => {
          lines.jagged({
            sketch,
            start,
            end,
            segments: 20,
            random: 10
          });
        }
      });
    }
  }
}

</script>
