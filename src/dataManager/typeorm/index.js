const typeorm = require("typeorm");

/**
 *
 * @param config An JSON object that declares the connection parameters
 *  {
 *      host: "URL",
 *      username: "user name
 *      password: "a_password
 *
 *  }
 * @returns {Promise<void>}
 */
const getConnection = async (config) => {

    if(! config.host) throw new Error("No host defined");
    if(! config.username) throw new Error("No username defined");
    if(! config.password) throw new Error("No password defined");
    if(! config.database) throw new Error("No database defined");
    let connection;
    connection =  await typeorm.createConnection({
        type: "postgres",
        host: config.host,
        port: 5432,
        username: config.username,
        password: config.password,
        database: config.database,
        synchronize: true,
        logging: false,
        entities: [
            require("./entity/InstrumentTypeSchema"),
            require("./entity/InstrumentSchema"),
            require("./entity/ManufacturerSchema"),
            require("./entity/AddressSchema"),
            require("./entity/UserSchema"),
            require("./entity/PurchaseSchema"),
            require("./entity/RefurbishmentSchema"),
            require("./entity/AcquisitionSchema"),
        ]
    });

    return connection;
}

const createResellerDb = async (connection, databaseName) => {
    const dbName = databaseName || "reseller"
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    try {
        await queryRunner.query(`CREATE DATABASE ${dbName}`);
    } catch (e) {
        if(e.message === `database \"${dbName}\" already exists`) {
            logger.info(e.message + " is an expected error")
        }else {
            throw e
        }

    }
    await queryRunner.release();
}

module.exports = {getConnection,createResellerDb};