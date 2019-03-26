<script>

import p5Base from '~/components/p5Base';
import lines from '~/lib/p5/lines';

export default {
  extends: p5Base,
  methods: {
    setup(sketch) {
      sketch.createCanvas(this.canvasWidth, this.canvasHeight);
      sketch.background(0);
      sketch.stroke(255);
      sketch.noLoop();
    },
    draw(sketch) {
      lines.jagged({
        start: {x: 0, y: 0},
        end: {x: this.canvasWidth, y: this.canvasHeight},
        segments: 10,
        random: 200,
        draw: ({ start, end }) => {
          lines.jagged({
            start,
            end,
            segments: 20,
            random: 10
          }, null, sketch );
        }
      }, null, sketch );
    }
  }
}

</script>

<style>

</style>
