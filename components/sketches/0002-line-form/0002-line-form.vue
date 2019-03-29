<script>

import p5Base from '~/components/p5Base';
import lines from '~/lib/p5/lines';
import staticImage from './static.png';

// console.log(staticImage)

const VueP5 = process.client ? require('vue-p5') : null;

export default {
  extends: p5Base,
  computed: {
    staticImage(){
      console.log('asdf', staticImage)
      return staticImage;
    }
  },
  methods: {
    setup(sketch) {
      sketch.background(0);
      sketch.stroke(255);
      sketch.background(0);
      sketch.stroke(255, 10);
      sketch.noLoop();
    },
    draw(sketch) {
      lines.jagged({
        sketch,
        start: {x: 0, y: 0},
        end: {x: this.getWidth(), y: this.getHeight()},
        segments: 10,
        random: this.widthFromPercent(0.25),
        draw: ({ start, end }) => {
          lines.jagged({
            sketch,
            start,
            end,
            segments: 20,
            random: this.widthFromPercent(0.0125),
            // asdf
            // draw: ({ start, end }) => {
            //     lines.jagged({
            //       sketch,
            //       start,
            //       end,
            //       segments: 50000,
            //       random: this.widthFromPercent(0.4),
            //     });
            // }
          });
        }
      });
    }
  }
}

</script>
