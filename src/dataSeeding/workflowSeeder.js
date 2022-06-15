const { faker } = require('@faker-js/faker');
const {getRandomSaxophoneSync,getRandomBrassSync,getRandomClarinetSync} = require('./instrumentSeeder')
const {createRandomUserSync}  = require('./user_manuSeeder')
const randomIntFromIntervalSync = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}



const getInstrumentByVendorType = (vendorType) => {
    const obj = {};
    switch (vendorType.toLowerCase()){
        case "clarinet":
            obj.instrument =  getRandomClarinetSync();
            break;
        case "brass":
            obj.instrument =  getRandomBrassSync();
            break;
        case "saxophone":
            obj.instrument =  getRandomSaxophoneSync();
            break;
    }
    return obj;
}

const getRandomPurchaseSync = (vendorType) => {
    const obj = {};
    obj.buyer = createRandomUserSync()
    obj.price = randomIntFromIntervalSync(200, 1000);
    obj.purchaseDate = faker.date.betweens('2022-01-01T00:00:00.000Z', Date.now())
    obj.instrument = getInstrumentByVendorType(vendorType)
    return obj;
}

const getRandomAcquisitionSync = (vendorType) => {
    const obj = {};
    obj.seller = createRandomUserSync()
    obj.price = randomIntFromIntervalSync(200, 1000);
    obj.date = faker.date.betweens('2022-01-01T00:00:00.000Z', Date.now())
    obj.instrument = getInstrumentByVendorType(vendorType)
    return obj;
}

const getRandomRefurbishmentSync = (vendorType) =>{
    const obj = {};
    obj.instrument = getInstrumentByVendorType(vendorType)
    obj.workToBeDone = `This instrument needs: ${faker.lorem.sentence()}`
    obj.startDate = new Date(faker.date.betweens('2022-01-01T00:00:00.000Z', Date.now()))
    obj.finishDate = faker.date.betweens(obj.startDate, obj.startDate.addDays(30))

    return obj;
}

module.exports = {getRandomPurchaseSync,getRandomAcquisitionSync,getRandomRefurbishmentSync}