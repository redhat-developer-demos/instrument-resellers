const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Acquisition",
    tableName: "acquisitions",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        price: {
            type: "float"
        },
        acquisitionDate: {
            type: "date"
        }
    },
    relations: {
        seller: {
            target: "User",
            type: "one-to-one",
            joinTable: true,
            cascade: true
        },
        instrument: {
            target: "Instrument",
            type: "one-to-one",
            joinTable: true,
            cascade: true
        }
    }
});