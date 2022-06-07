'use strict';

const typeorm = require("typeorm");
const {Instrument} = require('../dataManager/typeorm/model/Instrument')
const {getConnection, createResellerDb} = require('../dataManager/typeorm')
const seeder = require("../dataSeeding/instrumentSeeder");
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;


let connection;

const getAdminConfigSync = ()  => {
    return {
        host: "localhost",
        username: "postgres",
        password: "mypassword",
        database: "postgres"
    }
}

const getResellerConfigSync = ()  => {
    return {
        host: "localhost",
        username: "postgres",
        password: "mypassword",
        database: "reseller"
    }
}

describe('Orm Tests: ', () => {

    before(async () => {


    });

    it('Can connect to DB and create DB Instruments', async () => {
        connection = await getConnection(getAdminConfigSync());
        await createResellerDb(connection)
        expect(connection).to.be.an('object');
    });

    it('Can create Instrument', async () => {
        connection = await getConnection(getResellerConfigSync());
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