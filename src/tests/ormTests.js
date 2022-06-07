'use strict';

const typeorm = require("typeorm");
const {Instrument} = require('../dataManager/typeorm/model/Instrument')
const {getConnection} = require('../dataManager/typeorm')
const seeder = require("../dataSeeding/instrumentSeeder");
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;

let connection;

describe('Orm Tests: ', () => {

    before(async () => {
        const config = {
            host: "localhost",
            username: "postgres",
            password: "mypassword",
        }
        connection = await getConnection(config);
    });

    it('Can connect to DB', async () => {
        expect(connection).to.be.an('object');
    });

    it('Can create Instrument', async () => {
        const clarinet = seeder.getRandomClarinetSync();
        let manufacturer = clarinet.manufacturer;
        let instrument = new Instrument(null,clarinet.name, clarinet.instrument, clarinet.type, manufacturer);

        let repository = connection.getRepository("Instrument");
        repository.save(instrument)
            .then(function(savedInstrument) {
                expect(savedInstrument).to.be.an('object');
                console.log("Instrument has been saved: ", savedInstrument);
                console.log("Now lets load all instruments: ");

                return repository.find();
            })
            .then(function(allInstruments) {
                console.log("All posts: ", allInstruments);
            });
    });
});