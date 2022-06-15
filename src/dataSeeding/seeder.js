const {getRandomPurchaseSync,getRandomAcquisitionSync,getRandomRefurbishmentSync} = require("./workflowSeeder")
const {logger} = require("../logger");

// seed acquisitions
const seedAcquisitions  = async(vendorType, count, connection) => {
    for( let i = 0; i < count; i++){
        const obj = getRandomAcquisitionSync(vendorType);
        logger.info(`Data from seedAcquisitions: ${JSON.stringify(obj)}`)
        // bind data to model
    }
}

// seed refurbishments
const seedRefurbishments  = async(vendorType, count, connection) => {
    for( let i = 0; i < count; i++){
        const obj = getRandomRefurbishmentSync(vendorType);
        logger.info(`Data from seedRefurbishments: ${JSON.stringify(obj)}`)
        // bind data to model
    }
}

// seed purchases
const seedPurchases  = async(vendorType, count, connection) => {
    for( let i = 0; i < count; i++){
        const obj = getRandomPurchaseSync(vendorType);
        logger.info(`Data from seedPurchases: ${JSON.stringify(obj)}`)
    }
}

const seed = async(vendorType, count, connection) => {
    await seedAcquisitions(vendorType, count, connection);
    await seedRefurbishments(vendorType, count, connection);
    await seedPurchases(vendorType, count, connection);
}

module.exports = {seed};