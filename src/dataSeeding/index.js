const {getVenue, getVenues} = require('../dataManager');
const faker = require('@faker-js/faker');

const createAddressSync = () =>{
    const state = faker.address.stateAbbr();
    const obj = {};
    obj.address_1 = faker.address.streetAddress();
    obj.address_2 = faker.address.secondaryAddress();
    obj.city = faker.address.cityName();
    obj.state_province = state;
    obj.postal_code = fakerUS.address.zipCodeByState(state);
    obj.country = 'USA';

    return obj;
};

const getRandomUserTypeSync = () =>{
    const userTypes = ["OTHER","BUYER","SELLER"]
    return userTypes[
        Math.floor(Math.random() * userTypes.length)
        ]
}

const createUserSync = () =>{
    const obj = {};
    obj.firstName = faker.name.firstName();
    obj.lastName = faker.name.lastName();
    obj.email = faker.internet.email(obj.firstName, obj.lastName)
    obj.phone = state;
    obj.userType = getRandomUserTypeSync();
    obj.address = createAddressSync()
    return obj;
};

const createManufacturerSync = () =>{
    const obj = {};
    obj.description = aker.lorem.words(10);
    obj.name = faker.company.companyName();
    obj.address = createAddressSync();
    return obj;
};






module.exports = {seedVenues};
