const EntitySchema = require("typeorm").EntitySchema;
const InstrumentType = require("../model/InstrumentType").InstrumentType;

module.exports = new EntitySchema({
    name: "InstrumentType",
    tableName: "instrumentTypes",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        instrument: {
            type: "varchar"
        },
        type: {
            type: "varchar"
        }
    }
});