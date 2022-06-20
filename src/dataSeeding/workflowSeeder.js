const { faker } = require('@faker-js/faker');
const {getRandomSaxophoneSync,getRandomBrassSync,getRandomClarinetSync} = require('./instrumentSeeder')
const {createRandomUserSync}  = require('./user_manuSeeder')
const randomIntFromIntervalSync = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const DAYS_BACK = -60;

Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const getInstrumentByVendorType = (vendorType) => {
    let obj = {};
    switch (vendorType.toLowerCase()){
        case "clarinet":
            obj = getRandomClarinetSync();
            break;
        case "brass":
            obj = getRandomBrassSync();
            break;
        case "saxophone":
            obj= getRandomSaxophoneSync();
            break;
    }
    return obj;
}

const getRandomPurchaseSync = (vendorType) => {
    const obj = {};
    obj.buyer = createRandomUserSync()
    obj.price = randomIntFromIntervalSync(200, 1000);
    const startDate = new Date(Date.now()).addDays((DAYS_BACK));
    obj.purchaseDate = faker.date.between(startDate, Date.now())
    obj.instrument = getInstrumentByVendorType(vendorType)
    return obj;
}

const getRandomAcquisitionSync = (vendorType) => {
    const obj = {};
    obj.seller = createRandomUserSync()
    obj.seller.userType = 'SELLER';
    obj.price = randomIntFromIntervalSync(200, 1000);
    obj.date = faker.date.between('2022-01-01T00:00:00.000Z', Date.now())
    obj.instrument = getInstrumentByVendorType(vendorType);
    return obj;
}

const getRandomRefurbishmentSync = (vendorType) =>{
    let obj= {};
    obj.instrument = getInstrumentByVendorType(vendorType)
    obj.workToBeDone = `This instrument needs: ${faker.lorem.sentence()}`;
    const startDate = new Date(Date.now()).addDays(DAYS_BACK);
    obj.startDate = faker.date.between(startDate, Date.now());
    const endDate = obj.startDate.addDays(30);
    obj.finishDate = faker.date.between(obj.startDate, endDate)

    return obj;
}

module.exports = {getRandomPurchaseSync,getRandomAcquisitionSync,getRandomRefurbishmentSync}