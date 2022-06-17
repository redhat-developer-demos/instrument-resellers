'use strict';
require('dotenv').config();
const {
    setPing,
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
    getRefurbishment,
    ping
} = require('../dataManager/mongoose/index');
const {logger} = require('../logger');
const {getConnection, getConnectionConfigSync} = require('../dataManager/mongoose/connection')
const seeder = require("../dataSeeding/instrumentSeeder");
const {getPings} = require("../dataManager/mongoose");
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;




describe('MongoDB Tests', () => {
    before(async () => {


    });
    it('Can connect to DB', async () => {
        const connection = await getConnection();
        expect(connection).to.be.an('object');
        connection.disconnect();

    }).timeout(5000);;;

    it('Can ping to DB', async () => {
        const message = "Hi there";
        const config = getConnectionConfigSync()
        await setPing(config.url,  message)
            .catch(e => {
                logger.error(e)
            });
    }).timeout(5000);

    it('Can get Pings', async () => {
        const config = getConnectionConfigSync()
        const pings = await getPings(config.url)
            .catch(e => {
                logger.error(e);
            })
        logger.info(pings);
        expect(pings).to.be.an('array');
    });

    if('run out the clock', async () => {
        //this test doesn't do anything, it just
        //shuts down the test.
        expect(1).to.eq(1);
    });

})