const EntitySchema = require("typeorm").EntitySchema;
const Address = require("../model/Address").Address;

module.exports = new EntitySchema({
    name: "Address",
    target: Address,
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: true
        },
        address_1: {
            type: "varchar"
        },
        address_2: {
            type: "varchar"
        },
        city: {
            type: "varchar"
        },
        state_province: {
            type: "varchar"
        },
        zip_region_code: {
            type: "varchar"
        },
        country: {
            type: "varchar"
        },
    }
});