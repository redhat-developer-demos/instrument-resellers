const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Manufacturer = require("../model/Manufacturer").Manufacturer;
const Address = require("../model/Address").Address; //

module.exports = new EntitySchema({
    name: "Manufacturer",
    target: Manufacturer,
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: true
        },
        name: {
            type: "varchar"
        },
        description: {
            type: "text"
        }
    },
    relations: {
        address: {
            target: "Address",
            type: "one-to-one",
            joinTable: true,
            cascade: true
        }
    }
});