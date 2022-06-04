const mongoose = require('mongoose');
const _ = require('lodash');
const moption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

if (!process.env.MONGODB_URL) throw new Error('The required environment variable, MONGODB_URL does not exist or has no value');

const schemas = require('./schemas');

const getUsers = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            console.log({message:`Getting Users at ${new Date()}`});
            const items = schemas.User.find({}).lean();
            console.log({message:`Got Users at ${new Date()}`, items});
            return items;
        });
};

const getUser = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.User.findById( id);
            console.log(rtn);
            return rtn;
        });
    return item;
};

const getInstruments = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            console.log({message:`Getting Instruments at ${new Date()}`});
            const items = schemas.Instrument.find({}).lean();
            console.log({message:`Got Instruments at ${new Date()}`, items});
            return items;
        });
};

const getInstrument = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.Instrument.findById( id);
            console.log(rtn);
            return rtn;
        });
    return item;
};

const getManufacturers = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            console.log({message:`Getting Manufacturers at ${new Date()}`});
            const items = schemas.Manufacturer.find({}).lean();
            console.log({message:`Got Manufacturers at ${new Date()}`, items});
            return items;
        });
};

const getManufacturer = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.Manufacturer.findById( id);
            console.log(rtn);
            return rtn;
        });
    return item;
};

const getPurchases = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            console.log({message:`Getting Purchases at ${new Date()}`});
            const items = schemas.Purchase.find({}).lean();
            console.log({message:`Got Purchases at ${new Date()}`, items});
            return items;
        });
};

const getPurchase = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.Purchase.findById( id);
            console.log(rtn);
            return rtn;
        });
    return item;
};

const getAcquisitions = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            console.log({message:`Getting Acquisitions at ${new Date()}`});
            const items = schemas.Acquisition.find({}).lean();
            console.log({message:`Got Acquisitions at ${new Date()}`, items});
            return items;
        });
};

const getAcquisition = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.Acquisition.findById( id);
            console.log(rtn);
            return rtn;
        });
    return item;
};

const getRefurbishments = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            console.log({message:`Getting Refurbishments at ${new Date()}`});
            const items = schemas.Refurbishment.find({}).lean();
            console.log({message:`Got Refurbishments at ${new Date()}`, items});
            return items;
        });
};

const getRefurbishment = async (id)=> {
    const item = await mongoose.connect(process.env.MONGODB_URL, moption)
        .then(result => {
            const rtn = schemas.Refurbishment.findById( id);
            console.log(rtn);
            return rtn;
        });
    return item;
};




module.exports = {
    getUsers,
    getUser,
    getInstruments,
    getInstrument,
    getManufacturers,
    getManufacturer,
    getPurchases,
    getPurchase,
    getAcquisitions,
    getAcquisition,
    getRefurbishments,
    getRefurbishment
};

