const {logger} = require("../../logger");
const mongoose = require("mongoose");

if (!process.env.MONGODB_URL)throw new Error('The required environment variable, MONGODB_URL does not exist or has no value');
if (!process.env.RESELLER_DB_NAME)throw new Error('The required environment variable, RESELLER_DB_NAME does not exist or has no value');
let connection;

const getConnection = async () => {
    if (!connection) {
        const url = `${process.env.MONGODB_URL}/${process.env.RESELLER_DB_NAME}`;
        let conn;
        logger.info(`Attempting to connect at url: ${process.env.MONGODB_URL} and dbName : ${process.env.RESELLER_DB_NAME}`)
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

