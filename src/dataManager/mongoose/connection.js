const {logger} = require("../../logger");
const mongoose = require("mongoose");

if (!process.env.MONGODB_HOSTNAME) throw new Error('The required environment variable, MONGODB_HOSTNAME does not exist or has no value');
if (!process.env.MONGODB_USER) throw new Error('The required environment variable, MONGODB_USER does not exist or has no value');
if (!process.env.MONGODB_PWD) throw new Error('The required environment variable, MONGODB_PWD does not exist or has no value');
if (!process.env.RESELLER_DB_NAME) throw new Error('The required environment variable, RESELLER_DB_NAME does not exist or has no value');

let connection;

const moption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const getConnection = async () => {
    if (!connection) {
        const url = process.env.MONGO_URL
        //const url = `mongodb://${process.env.MONGODB_HOSTNAME}:27017/${process.env.RESELLER_DB_NAME}`;
        const params = getConnectionParamsSync();
        connection = await mongoose.connect(url);
        logger.info("logged into Mongodb")
        /*
        const url ='mongodb://simpleuser:simplepassword@localhost:27107/clydesclarinets'
        //const url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@${process.env.MONGODB_HOSTNAME}:27017/`;
        logger.info(`Connecting to ${url}`)
        mongoose.connect(url, moption);
        logger.info(`Connected to ${url}`)
        connection = mongoose.connection;
         */
    }
    return connection
}
const getConnectionParamsSync = () => {
    const old =  {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true,
        authSource: "admin",
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PWD,
        useUnifiedTopology: true,
    }
    const obj = {
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PWD,
    }

    return old;
}
const getConnectionConfigSync = () => {
    const config = {};
    config.url = `${process.env.MONGO_URL}/${process.env.SEEDER_INSTRUMENT}`;
    return config
};


module.exports = {getConnection, getConnectionConfigSync};

