class Line {

    getLineSegments({ start, end, segments }) {
        const xDistance = end.x - start.x
        const yDistance = end.y - start.y
        const xStep = xDistance / segments
        const yStep = yDistance / segments
        const points = [];
        for (let i = 0; i <= segments; i++){
            points.push({
                x: i * xStep + start.x,
                y: i * yStep + start.y
            })
        }
        return points
    }

    getRandomOffset(value, random) {
        return ((Math.random() * random) - random/2) + value
    }

    jagged(args) {
      const { draw, sketch, random } = args;
      const points = this.getLineSegments(args);
      let previousPoint = points[0];
      for (let i = 1; i < points.length; i++){
        let r = i === points.length - 1 ? 0 : random;
        const thisPoint = {
            x: this.getRandomOffset(points[i].x, r),
            y: this.getRandomOffset(points[i].y, r)
        }
        if(draw){
          draw({...args, start: previousPoint, end: thisPoint });
          // draw(sketch, { start: previousPoint, end: thisPoint }, context);
        } else {
          sketch.line(previousPoint.x, previousPoint.y, thisPoint.x, thisPoint.y)
        }
        previousPoint = thisPoint;
      }
    }

    recurseLines({ start, end, randomReducer, segments, random, recursionLimit }) {
        const drawLines = ({ start, end }, context) => {
            const draw = ({ start, end }, context) => {
                drawLines({ start, end },
                    { recursionLevel: context.recursionLevel + 1,
                      randomMultiply: context.randomMultiply * randomReducer }
                );
            }
            this.jagged({
                start,
                end,
                segments,
                random: random * context.randomMultiply,
                draw: context.recursionLevel >= recursionLimit ? null : draw
            }, context);
        }
        drawLines({
            start,
            end
        }, { recursionLevel: 0, randomMultiply: 1.0 });
    }
}

export default new Line();
