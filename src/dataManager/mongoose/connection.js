const {logger} = require("../../logger");
const mongoose = require("mongoose");
const path = require("path");
if (!process.env.MONGODB_URL)throw new Error('The required environment variable, MONGODB_URL does not exist or has no value');
if (!process.env.RESELLER_DB_NAME)throw new Error('The required environment variable, RESELLER_DB_NAME does not exist or has no value');
let connection;

const getConnection = async () => {
    if (!connection) {
        let mStr = process.env.MONGODB_URL;
        //if the last character is not a /, add one
        if( mStr.substr(mStr.length - 1) !== "/") {
            mStr = mStr + "/";
        }
        const url = `${mStr}${process.env.RESELLER_DB_NAME}`;
        let conn;
        logger.info(`Attempting to connect at url: ${url}.`)
        conn = await mongoose.connect(url).catch(e =>{
            logger.error(e);
            throw e;
        });
        connection = conn;
    }
    return connection
}

const closeConnection = async () => {
    if (connection) {
        const url = connection.url;
        logger.info(`Closing connection into ${url}`);
        connection.disconnect();
        logger.info(`Closed connection into ${url}`);
    }
}

const getConnectionUrlSync = () => {
    return `${process.env.MONGODB_URL}/${process.env.RESELLER_DB_NAME}`;
};

module.exports = {getConnection, closeConnection, getConnectionUrlSync};

