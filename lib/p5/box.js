import {
  pointDistance
} from './point';

const centeredBox = ({
  upperLeftPoint,
  lowerRightPoint,
  width,
  height
}) => {
  const {
    xDistance,
    yDistance
  } = pointDistance({
    upperLeftPoint,
    lowerRightPoint
  });
  const box = {
    upperLeftPoint: {
      x: (xDistance - width) / 2 + upperLeftPoint.x,
      y: (yDistance - height) / 2 + upperLeftPoint.y
    },
    lowerRightPoint: {
      x: lowerRightPoint.x - (xDistance - width) / 2,
      y: lowerRightPoint.y - (yDistance - height) / 2
    }
  }
  box.width = box.lowerRightPoint.x - box.upperLeftPoint.x
  box.height = box.lowerRightPoint.y - box.upperLeftPoint.y
  return box
}

const colorBox = ({
  upperLeftPoint,
  lowerRightPoint,
  colors,
  reduce = 0.5,
  even = true,
  sketch
}) => {
  const {
    xDistance,
    yDistance
  } = pointDistance({
    upperLeftPoint,
    lowerRightPoint
  })
  let currentReduce = 1.0
  for (let i = 0; i < colors.length; i++) {
    let dimensions
    if (!even) {
      dimensions = {
        width: xDistance * currentReduce,
        height: yDistance * currentReduce
      }
    } else {
      const reduceBy = (colors.length - i) / colors.length;
      dimensions = {
        width: reduceBy * xDistance,
        height: reduceBy * yDistance
      }
    }

    const box = centeredBox({
      upperLeftPoint,
      lowerRightPoint,
      ...dimensions
    })
    sketch.fill(colors[i]);
    sketch.stroke(colors[i]);
    sketch.rect(box.upperLeftPoint.x, box.upperLeftPoint.y, box.width, box.height)
    currentReduce = currentReduce * reduce
  }
}

export {
  colorBox
}
