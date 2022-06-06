'use strict';

const typeorm = require("typeorm"); // import * as typeorm from "typeorm";
const Instrument = require('../dataManager/typeorm/model/Instrument')
const InstrumentType = require('../dataManager/typeorm/model/InstrumentType')
const Address = require('../dataManager/typeorm/model/Address')
const Manufacturer = require('../dataManager/typeorm/model/Manufacturer')
const chai = require('chai');
const seeder = require("../dataSeeding/instrumentSeeder");
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;

let connection;

describe('Orm Tests: ', () => {

    before(async () => {
    });

    it('Can connect to DB', async () => {

        const connection = await typeorm.createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "mypassword",
            database: "postgres",
            synchronize: true,
            logging: false,
            entities: [
                require("../dataManager/typeorm/entity/InstrumentTypeSchema"),
            ]
        });
        expect(connection).to.be.an('object');
    });

    it('Can create Instrument', async () => {
        const clarinet = seeder.getRandomClarinetSync();

    });
});