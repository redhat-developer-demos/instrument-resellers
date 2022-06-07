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
        date: {
            type: "date"
        }
    },
    relations: {
        address: {
            target: "Address",
            type: "one-to-one",
            joinTable: true,
            cascade: true
        },
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