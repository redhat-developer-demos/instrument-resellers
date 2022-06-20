'use strict';
require('dotenv').config();
const path = require('path');
const http = require('http');
const {logger} = require("./logger");
const {seed} = require("./dataSeeding/seeder")
const oas3Tools = require('oas3-tools');
const {modifyOpenApiSpecToVendorSync} = require('./helpers/yamlizer')
const {getAdminConnection, createResellerDatabase} = require('./helpers/dbAdminHelper')

const serverPort = process.env.SERVER_PORT || 8088;
const specPath = path.join(__dirname, 'api/openapi.yaml')
let adjustedSpecPath = path.join(__dirname, 'api/adjustedopenapi.yaml')

adjustedSpecPath = modifyOpenApiSpecToVendorSync({
    inputYamlPath: specPath,
    outputYamlPath: adjustedSpecPath,
    vendorName: process.env.VENDOR_NAME,
    serverHost: process.env.SERVER_HOST,
    serverPort: process.env.SERVER_PORT
})


// swaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};
const expressAppConfig = oas3Tools.expressAppConfig(adjustedSpecPath, options);
const app = expressAppConfig.getApp();


// Do the seeding if necessary
const serverStartMessage = (serverHost, serverPort) => {
    const url = `${serverHost}:${serverPort}`
    logger.info(`Your API entry point is ${url}/v1`);
    logger.info(`Swagger-ui is available on ${url}/docs`, serverPort);
}


if (process.env.SEED_DATA && process.env.SEED_DATA.toLowerCase() !== 'false' ) {
    let seedCount = Number(process.env.SEEDER_COUNT) || 10;
    const seedInstrument = process.env.SEEDER_INSTRUMENT;
    logger.info(`Seeding with ${seedInstrument} by count ${seedCount}`)
    seed(seedInstrument, seedCount)
        .then(() => {
            // Initialize the Swagger middleware
            http.createServer(app).listen(serverPort, function () {
                serverStartMessage(process.env.SERVER_HOST, serverPort)
            });
        })
} else {
    logger.info('No seeding in force')
    // Initialize the Swagger middleware
    http.createServer(app).listen(serverPort, function () {
        serverStartMessage(process.env.SERVER_HOST, serverPort)
    });
}




