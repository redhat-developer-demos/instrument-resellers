const EntitySchema = require("typeorm").EntitySchema;
module.exports = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        firstName: {
            type: "varchar"
        },
        lastName: {
            type: "varchar",
        },
        email: {
            type: "varchar"
        },
        phone: {
            type: "varchar"
        },
        userType: {
            type: 'enum',
            enum: ["OTHER", "BUYER", "SELLER"],
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