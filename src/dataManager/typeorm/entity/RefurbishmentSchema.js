const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Refurbishment",
    tableName: "refurbishments",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        workToBeDone: {
            type: "varchar"
        },
        startDate: {
            type: "date"
        },
        finishDate: {
            type: "date",
            nullable: true
        }
    },
    relations: {
        instrument: {
            target: "Instrument",
            type: "one-to-one",
            joinTable: true,
            cascade: true
        }
    }
});