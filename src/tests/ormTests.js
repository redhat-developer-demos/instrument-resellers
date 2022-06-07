'use strict';

const typeorm = require("typeorm"); // import * as typeorm from "typeorm";
const {Instrument} = require('../dataManager/typeorm/model/Instrument')
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
        connection = await typeorm.createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "mypassword",
            database: "instruments",
            synchronize: true,
            logging: false,
            entities: [
                require("../dataManager/typeorm/entity/InstrumentTypeSchema"),
                require("../dataManager/typeorm/entity/InstrumentSchema"),
                require("../dataManager/typeorm/entity/ManufacturerSchema"),
                require("../dataManager/typeorm/entity/AddressSchema")
            ]
        });
    });

    it('Can connect to DB', async () => {
        expect(connection).to.be.an('object');
    });

    it('Can create Instrument', async () => {
        const clarinet = seeder.getRandomClarinetSync();
        let instrumentType = clarinet.type;
        let manufacturer = clarinet.manufacturer;
        let instrument = new Instrument(null,clarinet.name, clarinet.instrument, clarinet.type, manufacturer);

        let repository = connection.getRepository("Instrument");
        repository.save(instrument)
            .then(function(savedInstrument) {
                console.log("Instrument has been saved: ", savedInstrument);
                console.log("Now lets load all instruments: ");

                return repository.find();
            })
            .then(function(allInstruments) {
                console.log("All posts: ", allInstruments);
            });
    });
});