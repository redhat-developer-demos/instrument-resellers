const {getRandomPurchaseSync,getRandomAcquisitionSync,getRandomRefurbishmentSync} = require("./workflowSeeder")
const {logger} = require("../logger");

const {setAcquisition, setPurchase, setRefurbishment,
    getUsersBySearch,
    setUser,
    getInstrumentsBySearch,
    setInstrument} = require('../dataManager/mongoose/index')
const {getConnectionUrlSync} = require('../dataManager/mongoose/connection')

// seed acquisitions
const seedAcquisitions  = async(vendorType, count) => {
    for( let i = 0; i < count; i++){
        const obj = getRandomAcquisitionSync(vendorType);
        logger.info(`Setting acquisition with data: ${JSON.stringify(obj)}`)
        await setAcquisition(obj);
        logger.info(`Set acquisition with data`)
        const user = await getUsersBySearch({firstName: obj.seller.firstName, lastName: obj.seller.lastName})
            .catch(e => {
                logger.error(e);
            })
        if (!user){
            logger.info(`Saving seller as user ${obj.seller}`);
            await setUser(obj.seller);
            logger.info(`Saved seller as user ${obj.seller}`);
        }
    }
}

// seed refurbishments
const seedRefurbishments  = async(vendorType, count) => {
    for( let i = 0; i < count; i++){
        const obj = getRandomRefurbishmentSync(vendorType);
        logger.info(`Setting refurbishment with data: ${JSON.stringify(obj)}`)
        await setRefurbishment(obj);
        logger.info(`Set refurbishment with data`)
    }
}

// seed purchases
const seedPurchases  = async(vendorType, count, connection) => {
    for( let i = 0; i < count; i++){
        const obj = getRandomPurchaseSync(vendorType);
        logger.info(`Setting purchase with data: ${JSON.stringify(obj)}`)
        await setPurchase(obj);
        logger.info(`Set purchase with data`)
        //see if it's a known user
        const user = await getUsersBySearch({email: obj.buyer.email})
        if (!user){
            logger.info(`Saving purchaser as user ${obj.buyer}`);
            await setUser(obj.buyer);
            logger.info(`Saved purchaser as user ${obj.buyer}`);
        }
        // save the instrument
        const instrument = await getInstrumentsBySearch({name: obj.instrument.name})
        if (!instrument){
            logger.info(`Saving instrument: ${obj.instrument.name}`);
            await setInstrument(obj.instrument);
            logger.info(`Saved purchaser as user ${obj.buyer}`);
        }
    }
}

const seed = async(vendorType, count) => {
    await seedAcquisitions(vendorType, count);
    await seedRefurbishments(vendorType, count);
    await seedPurchases(vendorType, count);
}

module.exports = {seed};