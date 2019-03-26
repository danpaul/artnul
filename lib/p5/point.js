const pointDistance = ({ upperLeftPoint, lowerRightPoint }) => {
    const xDistance = lowerRightPoint.x - upperLeftPoint.x;
    const yDistance = lowerRightPoint.y - upperLeftPoint.y;
    return { xDistance, yDistance }
}

export { pointDistance }