const mongoose = require('mongoose');
const _ = require('lodash');
const {logger} = require("../../logger");
const moption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useMongoClient: true
};

const schemas = require('./schemas');

const setPing = async (connectionUrl, message)=> {
    const conn = await mongoose.connect(connectionUrl);
    logger.info({message:`Pinging at ${new Date()}`});
    const ping = new schemas.Ping();
    await ping.save();
    const doc = await schemas.Ping.findOne();
    logger.info(`found this ${doc}`)
    await conn.disconnect();
};

const getPings = async (connectionUrl)=> {
    const conn = await mongoose.connect(connectionUrl);
    logger.info({message:`Getting Pings at ${new Date()}`});
    const items = await schemas.Ping.find({}).lean();
    logger.info({message:`Got Pings at ${new Date()}`, items});
    await conn.disconnect();
    return items;
};

const getUsers = async (connectionUrl, moption)=> {
    await mongoose.connect(connectionUrl, moption)
        .then(result => {
            logger.info({message:`Getting Users at ${new Date()}`});
            const items = schemas.User.find({}).lean();
            logger.info({message:`Got Users at ${new Date()}`, items});
            return items;
        });
};

const getUser = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.User.findById( id);
            logger.info(rtn);
            return rtn;
        });
    return item;
};

const getInstruments = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            logger.info({message:`Getting Instruments at ${new Date()}`});
            const items = schemas.Instrument.find({}).lean();
            logger.info({message:`Got Instruments at ${new Date()}`, items});
            return items;
        });
};

const getInstrument = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.Instrument.findById( id);
            logger.info(rtn);
            return rtn;
        });
    return item;
};

const getManufacturers = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            logger.info({message:`Getting Manufacturers at ${new Date()}`});
            const items = schemas.Manufacturer.find({}).lean();
            logger.info({message:`Got Manufacturers at ${new Date()}`, items});
            return items;
        });
};

const getManufacturer = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.Manufacturer.findById( id);
            logger.info(rtn);
            return rtn;
        });
    return item;
};


const setPurchase = async (connectionUrl, purchaseObj)=> {
    logger.info(`Connecting purchase at url ${connectionUrl}}`);
    const conn = await mongoose.connect(connectionUrl);
    logger.info(`Adding purchase ${purchaseObj}}`);
    const purchase = new schemas.Purchase();
    purchase.buyer = purchaseObj.buyer;
    purchase.instrument = purchaseObj.instrument;
    purchase.price = purchaseObj.price;
    purchase.purchaseDate = purchaseObj.purchaseDate || new Date(Date.now());
    await purchase.save();
    logger.info(`Added purchase ${purchaseObj}}`);
};

const getPurchases = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            logger.info({message:`Getting Purchases at ${new Date()}`});
            const items = schemas.Purchase.find({}).lean();
            logger.info({message:`Got Purchases at ${new Date()}`, items});
            return items;
        });
};

const getPurchase = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.Purchase.findById( id);
            logger.info(rtn);
            return rtn;
        });
    return item;
};


const setAcquisition = async (connectionUrl, acquisitionObj)=> {
    logger.info(`Connecting acquisition at url ${connectionUrl}}`);
    await mongoose.connect(connectionUrl);
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

const getAcquisitions = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            logger.info({message:`Getting Acquisitions at ${new Date()}`});
            const items = schemas.Acquisition.find({}).lean();
            logger.info({message:`Got Acquisitions at ${new Date()}`, items});
            return items;
        });
};

const getAcquisition = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.Acquisition.findById( id);
            logger.info(rtn);
            return rtn;
        });
    return item;
};


const setRefurbishment = async (connectionUrl, refurbishmentObj)=> {
    logger.info(`Connecting refurbishment at url ${connectionUrl}}`);
    await mongoose.connect(connectionUrl);
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

const getRefurbishments = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            logger.info({message:`Getting Refurbishments at ${new Date()}`});
            const items = schemas.Refurbishment.find({}).lean();
            logger.info({message:`Got Refurbishments at ${new Date()}`, items});
            return items;
        });
};

const getRefurbishment = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.Refurbishment.findById( id);
            logger.info(rtn);
            return rtn;
        });
    return item;
};


module.exports = {
    setPing,
    getPings,
    getUsers,
    getUser,
    getInstruments,
    getInstrument,
    getManufacturers,
    getManufacturer,
    getPurchases,
    getPurchase,
    setPurchase,
    getAcquisitions,
    getAcquisition,
    setAcquisition,
    getRefurbishments,
    getRefurbishment,
    setRefurbishment
};

