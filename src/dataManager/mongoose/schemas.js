const mongoose = require('mongoose');

const ping = mongoose.Schema({
    message: {type: String},
    created: {
        type: Date,
        default: Date.now
    }
})

const address = mongoose.Schema({
    address_1: {type: String},
    address_2: {type: String},
    city: {type: String},
    state_province: {type: String},
    zip_region_code: {type: String},
    country: {type: String, default: "USA"},
    created: {
        type: Date,
        default: Date.now
    }
});

const manufacturer = mongoose.Schema({
    name: {type: String},
    description: {type: String},
    address: {type: address}
})
const instrument = mongoose.Schema({
    instrument: {type: String},
    type: {type: String},
    name: {type: String},
    manufacturer: {type: manufacturer},
})

const user = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phone: {type: String},
    userType: {
        type: String,
        required: true,
        enum: ["OTHER", "BUYER", "SELLER"],
        default: "BUYER"
    },
    address: {
        type: { address}
    },
    created: {
        type: Date,
        default: Date.now
    }
});
const purchase = mongoose.Schema({
    buyer: {type: user},
    instrument: {type: instrument},
    price: {type: Number},
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
});
const acquisition = mongoose.Schema({
    seller: {type: user},
    instrument: {type: instrument},
    price: {type: Number},
    acquisitionDate: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
});
const refurbishment = mongoose.Schema({
    workToBeDone: {type: String},
    instrument: {type: instrument},
    startDate: {
        type: Date,
        default: Date.now
    },
    finishDate: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
});
const Manufacturer = mongoose.model('Manufacturer', manufacturer);
const Instrument = mongoose.model('Instrument', instrument);
const Address = mongoose.model('Address', address);
const User = mongoose.model('User', user);
const Purchase = mongoose.model('Purchase', purchase);
const Acquisition = mongoose.model('Acquisition', acquisition);
const Refurbishment = mongoose.model('Refurbishment', refurbishment);
const Ping = mongoose.model('Ping', ping);
module.exports = { Refurbishment, Acquisition, Purchase, User, Address, Instrument,Manufacturer, Ping };