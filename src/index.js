'use strict';
require('dotenv').config();
const path = require('path');
const http = require('http');
const {logger} = require("./logger");
const {seed} = require("./dataSeeding/seeder")
const oas3Tools = require('oas3-tools');
const {modifyOpenApiSpecToVendorSync} = require('./helpers/yamlizer')

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

const startUp = () => {

}

// Do the seeding if necessary
if (process.env.SEEDER_INSTRUMENT) {
    const seedCount = process.env.SEEDER_COUNT || 10
    const seedInstrument = process.env.SEEDER_INSTRUMENT;
    const seedConnection = {};
    logger.info(`Seeding ${JSON.stringify({seedInstrument, seedCount, seedConnection})}`)
    seed(seedInstrument, seedCount, seedConnection)
        .then(() => {
            // Initialize the Swagger middleware
            http.createServer(app).listen(serverPort, function () {
                logger.info('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
                logger.info('Swagger-ui is available on http://localhost:%d/docs', serverPort);
            });
        })
} else {
    logger.info('No seeding in force')
    // Initialize the Swagger middleware
    http.createServer(app).listen(serverPort, function () {
        logger.info('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
        logger.info('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
}




