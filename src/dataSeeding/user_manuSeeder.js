const { faker } = require('@faker-js/faker');
const createRandomUserSync = () =>{
    const obj = {};
    obj.firstName = faker.name.firstName();
    obj.lastName = faker.name.lastName();
    obj.email = faker.internet.email(obj.firstName, obj.lastName)
    obj.phone = faker.phone.phoneNumber();
    obj.userType = getRandomUserTypeSync();
    obj.address = createAddressObjectSync()
    return obj;
};
const createRandomManufacturerSync = () =>{
    const obj = {};
    obj.description = faker.lorem.words(10);
    obj.name = faker.company.companyName();
    obj.address = createAddressObjectSync();
    return obj;
};

const createAddressObjectSync = (address_1, address_2, city, state_province,zip_region_code, country) => {
    const state = faker.address.stateAbbr();
    const obj = {};
    obj.address_1 = address_1 || faker.address.streetAddress();
    obj.address_2 = address_2 || faker.address.secondaryAddress();
    obj.city = city || faker.address.cityName();
    obj.state_province = state_province || state;
    obj.zip_region_code = zip_region_code || faker.address.zipCodeByState(state);
    obj.country = country || 'USA';

    return obj;
};

const getRandomUserTypeSync = () =>{
    const userTypes = ["OTHER","BUYER","SELLER"]
    return userTypes[
        Math.floor(Math.random() * userTypes.length)
        ]
}

module.exports = {createRandomUserSync,createRandomManufacturerSync,createAddressObjectSync};
