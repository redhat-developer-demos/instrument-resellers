const EntitySchema = require("typeorm").EntitySchema;
const Address = require("../model/Address").Address;

module.exports = new EntitySchema({
    name: "Address",
    tableName: "addresses",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        address_1: {
            type: "varchar"
        },
        address_2: {
            type: "varchar",
            nullable: true,
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