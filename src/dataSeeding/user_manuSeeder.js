const { faker } = require('@faker-js/faker');
const createRandomUserSync = () =>{
    const obj = {};
    obj.firstName = faker.name.firstName();
    obj.lastName = faker.name.lastName();
    obj.email = faker.internet.email(obj.firstName, obj.lastName)
    obj.phone = faker.phone.phoneNumber();
    obj.userType = getRandomUserTypeSync();
    obj.address = createRandomAddressSync()
    return obj;
};
const createRandomManufacturerSync = () =>{
    const obj = {};
    obj.description = faker.lorem.words(10);
    obj.name = faker.company.companyName();
    obj.address = createRandomAddressSync();
    return obj;
};
const createRandomAddressSync = () =>{
    const state = faker.address.stateAbbr();
    const obj = {};
    obj.address_1 = faker.address.streetAddress();
    obj.address_2 = faker.address.secondaryAddress();
    obj.city = faker.address.cityName();
    obj.state_province = state;
    obj.zip_postal_code = faker.address.zipCodeByState(state);
    obj.country = 'USA';

    return obj;
};

const createAddressObjectSync = (address_1, address_2, city, state_province,zip_region_code, country) =>{
    const obj = {};
    obj.address_1 = address_1;
    obj.address_2 = address_2;
    obj.city = city;
    obj.state_province = state_province;
    obj.zip_region_code = zip_region_code;
    obj.country = country || 'USA';

    return obj;
};

const getRandomUserTypeSync = () =>{
    const userTypes = ["OTHER","BUYER","SELLER"]
    return userTypes[
        Math.floor(Math.random() * userTypes.length)
        ]
}

module.exports = {createRandomUserSync,createRandomManufacturerSync,createRandomAddressSync,createAddressObjectSync};
