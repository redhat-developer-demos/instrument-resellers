const {getRandomPurchaseSync, getRandomAcquisitionSync, getRandomRefurbishmentSync} = require("./workflowSeeder")
const {logger} = require("../logger");


const {
    setAcquisition, setPurchase, setRefurbishment,
    getUsersBySearch,
    setUser,
    getInstrumentsBySearch,
    setInstrument,
    getManufacturersBySearch
} = require('../dataManager/mongoose/index');
const {setManufacturer} = require("../dataManager/mongoose");

//const {getConnectionUrlSync} = require('../dataManager/mongoose/connection');

// seed acquisitions
const seedAcquisitions = async (vendorType, count) => {
    for (let i = 0; i < count; i++) {
        const obj = getRandomAcquisitionSync(vendorType);
        logger.info(`Setting acquisition with data: ${JSON.stringify(obj)}`)
        await setAcquisition(obj);
        logger.info(`Set acquisition with data`)
        // save the instrument and manufacturer
        await saveInstrumentAndManufacturer(obj.instrument);
        //save user
        await saveUser(obj.seller);
    }
}

// seed refurbishments
const seedRefurbishments = async (vendorType, count) => {
    for (let i = 0; i < count; i++) {
        const obj = getRandomRefurbishmentSync(vendorType);
        logger.info(`Setting refurbishment with data: ${JSON.stringify(obj)}`)
        await setRefurbishment(obj);
        logger.info(`Set refurbishment with data`);

        // save the instrument and manufacturer
        await saveInstrumentAndManufacturer(obj.instrument);
    }
}

// seed purchases
const seedPurchases = async (vendorType, count, connection) => {
    for (let i = 0; i < count; i++) {
        const obj = getRandomPurchaseSync(vendorType);
        logger.info(`Setting purchase with data: ${JSON.stringify(obj)}`)
        await setPurchase(obj);
        logger.info(`Set purchase with data`)
        //see if it's a known user
        await saveInstrumentAndManufacturer(obj.instrument);
        await saveUser(obj.buyer);
    }
}

const saveInstrumentAndManufacturer = async (instrumentObj) => {
    // save the instrument
    const instrument = await getInstrumentsBySearch({name: instrumentObj.name})
    if (!instrument) {
        logger.info(`Saving instrument: ${instrumentObj}`);
        await setInstrument(instrumentObj);
        logger.info(`Saved instrument as instrument ${instrumentObj}`);
    }
    // save the manufacturer
    const manufacturer = await getManufacturersBySearch({name: instrumentObj.manufacturer.name})
    if (!manufacturer) {
        logger.info(`Saving manufacturer: ${instrumentObj.manufacturer.name}`);
        await setManufacturer(instrumentObj.manufacturer);
        logger.info(`Saved manufacturer as  ${instrumentObj.manufacturer}`);
    }
}

const saveUser = async (userOjb) => {
    const users = await getUsersBySearch({firstName: userOjb.firstName, lastName: userOjb.lastName})
    if (!users) {
        logger.info(`Saving user: ${userOjb}`);
        await setUser(userOjb);
        logger.info(`Saved user as ${userOjb}`);
    }
}

const seed = async (vendorType, count) => {
    await seedAcquisitions(vendorType, count);
    await seedRefurbishments(vendorType, count);
    await seedPurchases(vendorType, count);
}

module.exports = {seed};