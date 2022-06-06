const instrumentSeeder = require('../dataSeeding/instrumentSeeder');

const getInstruments = (randomFunc, numberOfInstruments) => {
    const cnt = numberOfInstruments || 10;
    const arr = [];
    for(let i=0;i<cnt;i++){
        arr.push(randomFunc())
    }

    return arr;
}

const getClarinetsSync = (numberOfInstruments) => {
    return getInstruments(instrumentSeeder.getRandomClarinetSync,15)
}

const getBrassSync = (numberOfInstruments) => {
    return getInstruments(instrumentSeeder.getRandomBrassSync)
}

const getSaxophonesSync = (numberOfInstruments) => {
    return getInstruments(instrumentSeeder.getRandomSaxophoneSync)
}

module.exports = {getClarinetsSync,getBrassSync,getSaxophonesSync}