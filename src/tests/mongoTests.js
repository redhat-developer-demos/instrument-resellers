'use strict';
require('dotenv').config();
const { faker } = require('@faker-js/faker');
const {
    setPing,
    getPing,
    getAcquisitions,
    getAcquisition,
} = require('../dataManager/mongoose/index');
const {logger} = require('../logger');
const {getConnection, getConnectionUrlSync} = require('../dataManager/mongoose/connection')
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

    }).timeout(5000);

    it('Can ping to DB', async () => {
        const message = faker.lorem.words(10);
        await setPing(message)
            .catch(e => {
                logger.error(e)
            });
        const pings = await getPings()
        expect(pings).to.be.an('array');
        const ping = await getPing(pings[0].id.toString())
            .catch(e => {
                logger.error(e);
            })
        expect(ping).to.be.an('object');
        expect(ping.id).to.eq(pings[0].id.toString());

    }).timeout(5000);

    it('Can get ID from Acquisition', async () => {
        const items = await getAcquisitions()
        logger.info(`the it is ${items[0].id}`);
        const id = items[0].id.toString();
        const item = await getAcquisition(id)
        expect(item).to.be.an('object');
    }).timeout(5000);

    it('Can get Pings', async () => {
        // const url = getConnectionUrlSync()
        const pings = await getPings(url)
            .catch(e => {
                logger.error(e);
            })
        pings.forEach(ping =>{
            logger.info(`The ping.id is ${ping.id}`)
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