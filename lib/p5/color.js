const randomColor = () => {
    return color(random(255), random(255), random(255))
}

const randomHue = () => (random(255))

const hsb = (h = 255, s = 255, b = 255) => {
    // console.log(h, s, b)
    colorMode(HSB, 255);
    return color(h, s, b);
}

const divisions = (initial = 0, numberOfDivisions = 1, returnColors = true, base = 255) => {
    const divisions = [];
    const increment = base/numberOfDivisions;
    let current = initial;
    for(let i = 0; i < numberOfDivisions; i++){
        divisions.push(current % base);
        current += increment;
    }
    if(returnColors){
        return divisions.map((h) => (hsb(h)));
    }
    return divisions;
}

export { randomColor, hsb, randomHue, divisions }