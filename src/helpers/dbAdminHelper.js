const {getConnection, createResellerDb} = require('../dataManager/typeorm')
const {logger} = require("../logger");
const host = process.env.DB_HOST;
const username=process.env.DB_USER_NAME
const password=process.env.DB_PWD
const database=process.env.DB_DEFAULT_NAME
const dbService=process.env.DB_SERVICE

if(!process.env.RESELLER_DB_NAME ) throw new Error('No Reseller DB declared for envigonment variable RESELLER_DB_NAME')

const resellerDbName = process.env.RESELLER_DB_NAME;

if(!host && !dbService) throw new Error("No datasource defined");

const getAdminConnection = async()=> {
    if(host && !dbService){
        let config;
        if (host) {
            config = {
                host,
                username,
                password,
                database
            }
            logger.info(`connecting to DB with ${JSON.stringify(config)}`)
            const connection = await getConnection(config);
            logger.info(`connected to DB`)
            return connection;
        }
    }
    if(dbService){
        //connect to a K8S database service
    }else
    {
        throw new Error("No K8S database service defined")
    }
}


const createResellerDatabase = async() =>{
    const conn = await getAdminConnection();
    logger.info(`Creating reseller db with the name: ${resellerDbName}`)
    const resellerDb = await createResellerDb(conn, resellerDbName);
    logger.info(`Created reseller db with the name: ${resellerDbName}`)
    return {resellerDb, conn};
}
module.exports = {getAdminConnection, createResellerDatabase};
