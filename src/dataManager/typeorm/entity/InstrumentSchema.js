const EntitySchema = require("typeorm").EntitySchema;

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