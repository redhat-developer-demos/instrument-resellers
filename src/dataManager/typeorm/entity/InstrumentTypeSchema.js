const EntitySchema = require("typeorm").EntitySchema;
const InstrumentType = require("../model/InstrumentType").InstrumentType;

module.exports = new EntitySchema({
    name: "InstrumentType",
    target: InstrumentType,
    columns: {
        id: {
            primary: true,
            type: "uuid",
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