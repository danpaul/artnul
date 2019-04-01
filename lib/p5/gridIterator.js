import { pointDistance } from './point'

/**
 * `x` and `y` values supplied to translate should be from 0.0 through 1.0
 */
const translate = ({ upperLeftPoint, lowerRightPoint }) => {
    const { xDistance, yDistance } = pointDistance({ upperLeftPoint, lowerRightPoint });
    return {
        x: (x) => { return upperLeftPoint.x + (x * xDistance) },
        y: (y) => { return upperLeftPoint.y + (y * yDistance) }
    }
}

const gridIterate = ({ upperLeftPoint, lowerRightPoint, xSegments, ySegments, callback, sketch }) => {

    const { xDistance, yDistance } = pointDistance({ upperLeftPoint, lowerRightPoint });
    const xSegmentLength = xDistance / xSegments
    const ySegmentLength = yDistance / ySegments

    // rows
    for (let i = 0; i < ySegments; i++){
        // columns
        for (let j = 0; j < xSegments; j++){
            const points = {
                upperLeftPoint: {
                    x: upperLeftPoint.x + j * xSegmentLength,
                    y: upperLeftPoint.y + i * ySegmentLength
                },
                lowerRightPoint: {
                    x: upperLeftPoint.x + (j + 1) * xSegmentLength,
                    y: upperLeftPoint.y + (i + 1) * ySegmentLength
                }
            }
            const { xDistance, yDistance } = pointDistance({ ...points });
            callback({
                row: i,
                column: j,
                ...points,
                translate: translate(points),
                xDistance,
                yDistance,
                sketch
            });
        }
    }
}

const gridElementClicked = (x, y, canvasWidth, canvasHeight, xSegments, ySegments) => {
    return [Math.floor(x/canvasWidth * xSegments), Math.floor(y/canvasHeight * ySegments)];
}

export { gridIterate, gridElementClicked }
