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
    let connection;
    connection =  await typeorm.createConnection({
        type: "postgres",
        host: config.host,
        port: 5432,
        username: config.username,
        password: config.password,
        database: "postgres",
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

const findOne = async (connection, repoName, id) => {
    const repo = await connection.getRepository(repoName);
    const result = await repo.findOne({
        where: {
            id: id,
        },
        lock: { mode: "optimistic", version: 1 },
    })

    return result
}

const getInstrument = async (connection, id) => {
    const repo = "Instrument";
    const result  = findOne(connection,repo, id)
    return result;
}

const getInstruments = async (connection) =>{
    const result = await connection.getRepository("Instrument").find();
    return result;
}

const getInstrumentType = async (connection, id) => {
    const repo = "InstrumentType";
    const result  = findOne(connection,repo, id)
    return result;
}

const getInstrumentTypes = async (connection) =>{
    const result = await connection.getRepository("InstrumentType").find();
    return result;
}

const getManufacturer = async (connection, id) => {
    const repo = "Manufacturer";
    const result  = findOne(connection,repo, id)
    return result;
}

const getManufacturers = async (connection) =>{
    const result = await connection.getRepository("Manufacturer").find();
    return result;
}

const getUser= async (connection, id) => {
    const repo = "User";
    const result  = findOne(connection,repo, id)
    return result;
}

const getUsers= async (connection) =>{
    const result = await connection.getRepository("User").find();
    return result;
}

const getAddress= async (connection, id) => {
    const repo = "Address";
    const result  = findOne(connection,repo, id)
    return result;
}

const getAddresses= async (connection) =>{
    const result = await connection.getRepository("Address").find();
    return result;
}

const getPurchase= async (connection, id) => {
    const repo = "Purchase";
    const result  = findOne(connection,repo, id)
    return result;
}

const getPurchases= async (connection) =>{
    const result = await connection.getRepository("Purchase").find();
    return result
}

const getAcquisition= async (connection, id) => {
    const repo = "Acquisition";
    const result  = findOne(connection,repo, id)
    return result;
}

const getAcquisitions= async (connection) =>{
    const result = await connection.getRepository("Acquisition").find();
    return result
}

const getRefurbishment= async (connection, id) => {
    const repo = "Refurbishment";
    const result  = findOne(connection,repo, id)
    return result;
}

const getRefurbishments= async (connection) =>{
    const result = await connection.getRepository("Refurbishment").find();
    return result
}

module.exports = {
    getConnection,
    getRefurbishments,
    getRefurbishment,
    getAcquisitions,
    getAcquisition,
    getPurchases,
    getPurchase,
    getAddresses,
    getAddress,
    getUsers,
    getUser,
    getManufacturers,
    getManufacturer,
    getInstrumentTypes,
    getInstrumentType,
    getInstruments,
    getInstrument
}