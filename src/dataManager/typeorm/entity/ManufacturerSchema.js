const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Manufacturer = require("../model/Manufacturer").Manufacturer;
const Address = require("../model/Address").Address; //

module.exports = new EntitySchema({
    name: "Manufacturer",
    tableName: "manufacturers",
    columns: {
        id: {
            primary: true,
            type: "int",
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