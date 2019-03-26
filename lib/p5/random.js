// returns a random number that is equal changes negative or positive
const equalRandom = (value) => {
    return (Math.random() * value) - (value / 2)
}

const recurseRandom = (value, recurseProbability = 1.0, maxRecurse = 1, currentLevel = 0) => {
    const v = random(value);
    if(Math.random() < recurseProbability && currentLevel < maxRecurse){
        return recurseRandom(v, recurseProbability, maxRecurse, currentLevel + 1);
    }
    return v;
}

export { equalRandom, recurseRandom }