const {getRandomPurchaseSync,getRandomAcquisitionSync,getRandomRefurbishmentSync} = require("./workflowSeeder")
const {Refurbishment} = require('../dataManager/typeorm/model/Refurbishment')
const {Purchase} = require('../dataManager/typeorm/model/Purchase')
const {Acquisition} = require('../dataManager/typeorm/model/Acquisition')
const {logger} = require("../logger");
const {Instrument} = require("../dataManager/typeorm/model/Instrument");

const {setAcquisition, setPurchase, setRefurbishment} = require('../dataManager/mongoose/index')
const {getConnectionConfigSync} = require('../dataManager/mongoose/connection')

const dbURL = getConnectionConfigSync().url;
// seed acquisitions
const seedAcquisitions  = async(vendorType, count) => {
    for( let i = 0; i < count; i++){
        const obj = getRandomAcquisitionSync(vendorType);
        logger.info(`Setting acquisition with data: ${JSON.stringify(obj)}`)
        await setAcquisition(dbURL, obj);
        logger.info(`Set acquisition with data`)
    }
}

// seed refurbishments
const seedRefurbishments  = async(vendorType, count) => {
    for( let i = 0; i < count; i++){
        const obj = getRandomRefurbishmentSync(vendorType);
        logger.info(`Setting refurbishment with data: ${JSON.stringify(obj)}`)
        await setRefurbishment(dbURL, obj);
        logger.info(`Set refurbishment with data`)
    }
}

// seed purchases
const seedPurchases  = async(vendorType, count, connection) => {
    for( let i = 0; i < count; i++){
        const obj = getRandomPurchaseSync(vendorType);
        logger.info(`Setting purchase with data: ${JSON.stringify(obj)}`)
        await setPurchase(dbURL, obj);
        logger.info(`Set purchase with data`)
    }
}

const seed = async(vendorType, count) => {
    await seedAcquisitions(vendorType, count);
    await seedRefurbishments(vendorType, count);
    await seedPurchases(vendorType, count);
}

module.exports = {seed};