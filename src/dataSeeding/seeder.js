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

/**
 * Seeds acquisitions. An acquisition is an instrument that has been acquired for resale.
 * @param resellerInstrumentType {string}, this parameter supports the
 *  following values, clarinet, saxophone, brass
 * @param count, {number}, the number of records to generate for acquisitions.
 *
 * @returns {Promise<void>}
 */
const seedAcquisitions = async (resellerInstrumentType, count) => {
    for (let i = 0; i < count; i++) {
        const obj = getRandomAcquisitionSync(resellerInstrumentType);
        logger.info(`Setting acquisition with data: ${JSON.stringify(obj)}`)
        await setAcquisition(obj);
        logger.info(`Set acquisition with data`)
        // save the instrument and manufacturer
        await saveInstrumentAndManufacturer(obj.instrument);
        //save user
        await saveUser(obj.seller);
    }
}

/**
 *
 * Seeds refurbishments. A refurbishment is an instrument that needs repair
 * and upgrade in order to be sold.
 * @param resellerInstrumentType {string}, this parameter supports the
 *  following values, clarinet, saxophone, brass
 * @param count, {number}, the number of records to generate for refurbishments.
 *
 * @returns {Promise<void>}
 */
const seedRefurbishments = async (resellerInstrumentType, count) => {
    for (let i = 0; i < count; i++) {
        const obj = getRandomRefurbishmentSync(resellerInstrumentType);
        logger.info(`Setting refurbishment with data: ${JSON.stringify(obj)}`)
        await setRefurbishment(obj);
        logger.info(`Set refurbishment with data`);

        // save the instrument and manufacturer
        await saveInstrumentAndManufacturer(obj.instrument);
    }
}

/**
 *
 * Seeds purchases. A purchase is an instrument that has been sold.
 * @param resellerInstrumentType {string}, this parameter supports the
 *  following values, clarinet, saxophone, brass
 * @param count, {number}, the number of records to generate for refurbishments.
 * @returns {Promise<void>}
 */
const seedPurchases = async (resellerInstrumentType, count) => {
    for (let i = 0; i < count; i++) {
        const obj = getRandomPurchaseSync(resellerInstrumentType);
        logger.info(`Setting purchase with data: ${JSON.stringify(obj)}`)
        await setPurchase(obj);
        logger.info(`Set purchase with data`)
        //see if it's a known user
        await saveInstrumentAndManufacturer(obj.instrument);
        await saveUser(obj.buyer);
    }
}

/**
 * Saves the instrument and manufacturer associate with an acquisition or purchase
 * @param instrumentObj {object} The object that contains the instrument and its
 * instrument
 * @returns {Promise<void>}
 */
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
/**
 * Saves a user to the data source provided that the user does not
 * exist already according to firstName and lastName
 * @param userOjb The object that contains the user data
 * @returns {Promise<void>}
 */
const saveUser = async (userOjb) => {
    const users = await getUsersBySearch({firstName: userOjb.firstName, lastName: userOjb.lastName})
    if (!users) {
        logger.info(`Saving user: ${userOjb}`);
        await setUser(userOjb);
        logger.info(`Saved user as ${userOjb}`);
    }
}
/**
 * This is the entry point for data seeding
 * @param resellerInstrumentType {string}, this parameter supports the
 *  following values, clarinet, saxophone, brass
 * @param count, {number}, the number of records to generate for acquisitions, refurbishments
 *  and purchases. An acquisition is an instrument that has been acquired for resale.
 *
 *  A refurbishment is an instrument that need repair in order to be sold.
 *
 *  A purchase is an instrument that has been sold.
 * @returns {Promise<void>}
 */
const seed = async (resellerInstrumentType, count) => {
    await seedAcquisitions(resellerInstrumentType, count);
    await seedRefurbishments(resellerInstrumentType, count);
    await seedPurchases(resellerInstrumentType, count);
}

module.exports = {seed};