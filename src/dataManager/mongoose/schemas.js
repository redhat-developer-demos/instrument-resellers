const mongoose = require('mongoose');

const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const ping = new mongoose.Schema({
    message: {type: String},
    created: {
        type: Date,
        default: Date.now
    }
});

ping.plugin(mongooseLeanVirtuals);

const address = new mongoose.Schema({
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

address.plugin(mongooseLeanVirtuals);

const manufacturer = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    address: {type: address}
})

manufacturer.plugin(mongooseLeanVirtuals);

const instrument = new mongoose.Schema({
    instrument: {type: String},
    type: {type: String},
    name: {type: String},
    manufacturer: {type: manufacturer},
})

instrument.plugin(mongooseLeanVirtuals);

const user = new mongoose.Schema({
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
    address: { type: address},
    created: {
        type: Date,
        default: Date.now
    }
});

user.plugin(mongooseLeanVirtuals);

const purchase = new mongoose.Schema({
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

purchase.plugin(mongooseLeanVirtuals);

const acquisition = new mongoose.Schema({
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

acquisition.plugin(mongooseLeanVirtuals);

const refurbishment = new mongoose.Schema({
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

refurbishment.plugin(mongooseLeanVirtuals);

const Manufacturer = mongoose.model('Manufacturer', manufacturer);
const Instrument = mongoose.model('Instrument', instrument);
const Address = mongoose.model('Address', address);
const User = mongoose.model('User', user);
const Purchase = mongoose.model('Purchase', purchase);
const Acquisition = mongoose.model('Acquisition', acquisition);
const Refurbishment = mongoose.model('Refurbishment', refurbishment);
const Ping = mongoose.model('Ping', ping);
module.exports = { Refurbishment, Acquisition, Purchase, User, Address, Instrument,Manufacturer, Ping };