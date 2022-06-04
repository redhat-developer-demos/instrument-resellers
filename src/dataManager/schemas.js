const mongoose = require('mongoose');

const manufacturer = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    address: {type: address, required: true}
})

const instrument = mongoose.Schema({
    instrument: {type: String, required: true},
    type: {type: String, required: true},
    name: {type: String, required: true},
    manufacturer: {type: manufacturer, required: true},
    zip_region_code: {type: String, required: true},
})

const address = mongoose.Schema({
    address_1: {type: String, required: true},
    address_2: {type: String, required: true},
    city: {type: String, required: true},
    state_province: {type: String, required: true},
    zip_region_code: {type: String, required: true},
    created: {
        type: Date,
        default: Date.now
    }
});
const user = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    userType: {
        type: String,
        enum: ["OTHER", "BUYER", "SELLER"],
        default: "BUYER"
    },
    address: {
        type: { address, required: true}
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const seller = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    userType: {
        type: String,
        enum: ["OTHER", "BUYER", "SELLER"],
        default: "BUYER"
    },
    instrument: {type: instrument, required: true},
    address: {
        type: { address, required: true}
    },
    saleDate: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const purchase = mongoose.Schema({
    user: {type: user, required: true},
    instrument: {type: instrument, required: true},
    price: {type: Number, required: true},
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
});