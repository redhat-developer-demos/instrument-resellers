const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Purchase",
    tableName: "purchases",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        price: {
            type: "float"
        },
        purchaseDate: {
            type: "date"
        }
    },
    relations: {
        buyer: {
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