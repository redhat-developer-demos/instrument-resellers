const mongoose = require('mongoose');
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

const {getConnectionUrlSync} = require('./connection');
const {Ping, Acquisition, Refurbishment, Purchase, User, Instrument, Manufacturer} = require('./schemas');

const _ = require('lodash');
const {logger} = require("../../logger");
const moption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const schemas = require('./schemas');

const setPing = async (message) => {
    const url = getConnectionUrlSync();
    const conn = await mongoose.connect(url);
    logger.info({message: `Pinging at ${new Date()}`});
    const ping = new schemas.Ping();
    await ping.save();
    const doc = await schemas.Ping.findOne();
    logger.info(`found this ${doc}`)
    await conn.disconnect();
};

const getPings = async () => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getPings at url ${url}}`);
    const conn = await mongoose.connect(url);
    logger.info({message: `Getting Pings at ${new Date()}`});
    const items = await Ping.find({}).lean({virtuals: true});
    logger.info({message: `Got Pings at ${new Date()}`, items});
    return items;
};

const getPing = async (id) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getPings at url ${url}}`);
    const conn = await mongoose.connect(url);
    logger.info({message: `Getting Ping for ${id}`});
    const item = await Ping.findById(id).lean({virtuals: true});
    logger.info({message: `Got Ping for ${id}), ${item}`});
    return item;
};

const setUser = async (userObj) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting purchase at url ${url}}`);
    await mongoose.connect(url);
    logger.info(`Adding user ${userObj}}`);
    const user = new User();
    user.firstName = userObj.firstName;
    user.lastName = userObj.lastName;
    user.email = userObj.email;
    user.phone = userObj.phone;
    user.userType = userObj.userType;
    user.address = userObj.address;
    await user.save();
    logger.info(`Added user:  ${user}}`);
};


const getUsers = async () => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getUsers at url ${url}}`);
    logger.info({message: `Getting Users at ${new Date()}`});
    const items = await User.find({}).lean({virtuals: true});
    logger.info({message: `Got Users at ${new Date()}`, items});
    return items;

};

const getUsersBySearch = async (searchObj) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getUsers at url ${url}}`);
    logger.info({message: `Search users by criteria  ${searchObj}`});
    const item = await User.exists(searchObj).lean({virtuals: true})
        .catch(e => {
            logger.error(e);
            throw e;
        });
    logger.info(`Got Users by search ${item}`);
    return item;
};


const getUser = async (id) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getUser at url ${url}}`);
    await mongoose.connect(url)
    logger.info(`Getting User by id: ${id}`);
    const item = User.findById(id).lean({virtuals: true});
    logger.info(`Got User by id: ${id} ${item}`);
    return item;
};

const getInstrumentsBySearch = async (searchObj) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getInstrumentsBySearch at url ${url}}`);
    logger.info({message: `Search instrument by criteria  ${searchObj}`});
    const items = await Instrument.exists(searchObj).lean({virtuals: true})
        .catch(e => {
            logger.error(e);
            throw e;
        });
    logger.info(`Got Instrument by search ${items}`);
    return items;
};


const setInstrument = async (instrumentObject) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting setInstruments at url ${url}}`);
    await mongoose.connect(url);
    logger.info(`Saving instrument with data ${instrumentObject}`);
    const instrument = new Instrument();
    instrument.name = instrumentObject.name;
    instrument.instrument = instrumentObject.instrument;
    instrument.type = instrumentObject.type;
    instrument.manufacturer = instrumentObject.manufacturer;
    await instrument.save()
    logger.info(`Saved instrument with data ${instrumentObject}`);
};
const getInstruments = async () => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getInstruments at url ${url}}`);
    await mongoose.connect(url);
    logger.info(`Getting Instruments`);
    const items = await Instrument.find({}).lean();
    logger.info(`Got Instruments ${items}`);
    return items;
};

const getInstrument = async (id) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getInstrument at url ${url}}`);
    await mongoose.connect(url);
    logger.info(`Getting Instrument by id: ${id}`);
    const item = await Instrument.findById(id);
    logger.info(`Got Instrument ${item}`);
    return item;
};

const setManufacturer = async (manufacturerObject) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting setManufacturer at url ${url}}`);
    await mongoose.connect(url);
    logger.info(`Saving manufacturer with data ${manufacturerObject}`);
    const manufacturer = new Manufacturer();
    manufacturer.name = manufacturerObject.name;
    manufacturer.description = manufacturerObject.description;
    manufacturer.address = manufacturerObject.address;
    await manufacturer.save()
    logger.info(`Saved manufacturer with data ${manufacturerObject}`);
};

const getManufacturersBySearch = async (searchObj) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getManufacturersBySearch at url ${url}}`);
    logger.info({message: `Search manufacturer by criteria  ${searchObj}`});
    const items = await Manufacturer.exists(searchObj).lean({virtuals: true})
        .catch(e => {
            logger.error(e);
            throw e;
        });
    logger.info(`Got manufacturer by search ${items}`);
    return items;
};

const getManufacturers = async () => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getManufacturers at url ${url}}`);
    await mongoose.connect(url);
    const items = await Manufacturer.find({}).lean();
    logger.info(`Got Manufacturers data ${items}`);
    return items;

};

const getManufacturer = async (id) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getManufacturer at url ${url}}`);
    await mongoose.connect(url);
    logger.info(`Getting Manufacturer data for ${id}`);
    const item = Manufacturer.findById(id);
    logger.info(`Got Manufacturer data for ${id} ${item}`);
    return item;
};

const setPurchase = async (purchaseObj) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting purchase at url ${url}}`);
    const conn = await mongoose.connect(url);
    logger.info(`Adding purchase ${purchaseObj}}`);
    const purchase = new Purchase();
    purchase.buyer = purchaseObj.buyer;
    purchaseObj.buyer.userType = 'BUYER';
    purchase.instrument = purchaseObj.instrument;
    purchase.price = purchaseObj.price;
    purchase.purchaseDate = purchaseObj.purchaseDate || new Date(Date.now());
    await purchase.save();
    logger.info(`Added purchase ${purchaseObj}}`);
};

const getPurchases = async () => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getPurchases at url ${url}}`);
    await mongoose.connect(url);
    logger.info({message: `Getting Purchases at ${new Date()}`});
    const items = await Purchase.find({}).lean();
    logger.info({message: `Got Purchases at ${new Date()}`, items});
    return items;
};

const getPurchase = async (id) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getPurchase at url ${url}}`);
    await mongoose.connect(url)
    logger.info(`Getting purchase by id ${id}`)
    const item = await Purchase.findById(id);
    logger.info(`Got purchase by id ${id}, ${item}`)
    return item;
};


const setAcquisition = async (acquisitionObj) => {
    const url = getConnectionUrlSync();
    await mongoose.connect(url);
    logger.info(`Adding acquisition ${acquisitionObj}}`);
    const acquisition = new schemas.Acquisition();
    acquisition.seller = acquisitionObj.seller;
    acquisition.instrument = acquisitionObj.instrument;
    acquisition.price = acquisitionObj.price;
    acquisition.acquisitionDate = acquisitionObj.acquisitionDate || new Date(Date.now());
    await acquisition.save().catch(e => {
        logger.error(e)
    });
    logger.info(`Added acquisition ${acquisitionObj}}`);
};

const getAcquisitions = async () => {
    const url = getConnectionUrlSync()
    logger.info(`Connecting getAcquisitions at url ${url}}`);
    await mongoose.connect(url);
    logger.info({message: `Getting Acquisitions at ${new Date()}`});
    const items = await Acquisition.find({}).lean({virtuals: true})
        .catch(e => {
            logger.error(e);
            throw e;
        })
    return items;
};

const getAcquisition = async (id) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getAcquisition at url ${url}}`);
    await mongoose.connect(url);
    logger.info(`Getting Acquisition by id ${id}`)
    const item = Acquisition.findById(id);
    logger.info(`Got Acquisition by id ${id}, ${item}`)
    return item
};


const setRefurbishment = async (refurbishmentObj) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting refurbishment at url ${url}}`);
    await mongoose.connect(url);
    logger.info(`Adding refurbishment ${refurbishmentObj}}`);
    const refurbishment = new schemas.Refurbishment();
    refurbishment.instrument = refurbishmentObj.instrument;
    refurbishment.workToBeDone = refurbishmentObj.workToBeDone;
    refurbishment.startDate = refurbishmentObj.startDate || new Date(Date.now());
    refurbishment.finishDate = refurbishmentObj.finishDate
    await refurbishment.save().catch(e => {
        logger.error(e);
    });
    logger.info(`Added refurbishment ${refurbishmentObj}`);
};

const getRefurbishments = async () => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getRefurbishments at url ${url}}`);
    await mongoose.connect(url);
    logger.info({message: `Getting Refurbishments`});
    const items = await Refurbishment.find({}).lean();
    logger.info({message: `Got Refurbishments at ${items}`});
    return items;
}

const getRefurbishment = async (id) => {
    const url = getConnectionUrlSync();
    logger.info(`Connecting getRefurbishment at url ${url}}`);
    logger.info({message: `Getting Refurbishment by ${id}`});
    await mongoose.connect(url);
    const item = await Refurbishment.findById(id);
    logger.info({message: `Got Refurbishment by ${id}, ${item}`});
    return item;
};

module.exports = {
    setPing,
    getPing,
    getPings,
    setUser,
    getUsers,
    getUser,
    getUsersBySearch,
    getInstrumentsBySearch,
    getInstruments,
    setInstrument,
    getInstrument,
    setManufacturer,
    getManufacturers,
    getManufacturer,
    getManufacturersBySearch,
    getPurchases,
    getPurchase,
    setPurchase,
    getAcquisitions,
    getAcquisition,
    setAcquisition,
    getRefurbishments,
    getRefurbishment,
    setRefurbishment,
};




