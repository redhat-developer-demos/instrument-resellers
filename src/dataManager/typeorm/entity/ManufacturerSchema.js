const EntitySchema = require("typeorm").EntitySchema;

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