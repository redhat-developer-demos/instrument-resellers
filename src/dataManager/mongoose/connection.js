const {logger} = require("../../logger");
const mongoose = require("mongoose");

if (!process.env.MONGODB_URL)throw new Error('The required environment variable, MONGODB_URL does not exist or has no value');
let connection;

const getConnection = async () => {
    if (!connection) {
        const url = getConnectionUrlSync()
        connection = await mongoose.connect(url).catch(e =>{
            logger.error(e);
            throw e;
        }
    )
        logger.info("logged into Mongodb")
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

