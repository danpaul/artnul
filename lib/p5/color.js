const randomColor = ({ sketch }) => {
    return sketch.color(sketch.random(255), sketch.random(255), sketch.random(255))
}

const randomHue = () => (random(255))

const hsb = (sketch, h = 255, s = 255, b = 255) => {
  sketch.colorMode(sketch.HSB, 255)
  return sketch.color(h, s, b)
}

const divisions = ({ sketch, initial = 0, numberOfDivisions = 1, returnColors = true, base = 255 }) => {
  const divisions = []
  const increment = base/numberOfDivisions
  let current = initial
  for(let i = 0; i < numberOfDivisions; i++){
      divisions.push(current % base)
      current += increment
  }
  if(returnColors){
      return divisions.map((h) => (hsb(sketch, h)))
  }
  return divisions
}

export { randomColor, hsb, randomHue, divisions }
