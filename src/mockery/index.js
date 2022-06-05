const instrumentSeeder = require("./dataSeeding/instrumentSeeder");

const getInstruments = (randomFunc, numberOfInstruments) => {
    const cnt = numberOfInstruments || 10;
    const arr = [];
    for(let i=0;i<cnt;i++){
        arr.push(randomFunc())
    }

    return arr;
}

const getClarinetsSync = (numberOfInstruments) => {
    return getInstruments(instrumentSeeder.getRandomClarinetSync(numberOfInstruments))
}

const getBrassSync = (numberOfInstruments) => {
    return getInstruments(instrumentSeeder.getRandomBrassSync(numberOfInstruments))
}

const SaxophonesSync = (numberOfInstruments) => {
    return getInstruments(instrumentSeeder.getRandomSaxophoneSync(numberOfInstruments))
}

module.exports = {getClarinetsSync,getBrassSync,SaxophonesSync}