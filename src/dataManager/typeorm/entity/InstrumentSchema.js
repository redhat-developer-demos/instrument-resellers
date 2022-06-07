const EntitySchema = require("typeorm").EntitySchema;
//const Instrument = require("../model/Instrument").Instrument;
//const Manufacturer = require("../model/Manufacturer").Manufacturer;
//const InstrumentType = require("../model/InstrumentType").InstrumentType;

module.exports = new EntitySchema({
    name: "Instrument",
    tableName: "instruments",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        }
    },
    relations: {
        manufacturer: {
            target: "Manufacturer",
            type: "many-to-one",
            joinTable: true,
            cascade: true
        },
        instrumentType: {
            target: "InstrumentType",
            type: "many-to-one",
            joinTable: true,
            cascade: true
        }
    }
});