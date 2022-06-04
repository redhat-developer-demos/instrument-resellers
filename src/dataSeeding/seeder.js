const faker = require('@faker-js/faker');
const createRandomAddressSync = () =>{
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

const createAddressObjectSync = (address_1, address_2, city, state_province,postal_code, country) =>{
    const obj = {};
    obj.address_1 = address_1;
    obj.address_2 = address_2;
    obj.city = city;
    obj.state_province = state_province;
    obj.postal_code = postal_code;
    obj.country = country || 'USA';

    return obj;
};

const getRandomUserTypeSync = () =>{
    const userTypes = ["OTHER","BUYER","SELLER"]
    return userTypes[
        Math.floor(Math.random() * userTypes.length)
        ]
}

c
