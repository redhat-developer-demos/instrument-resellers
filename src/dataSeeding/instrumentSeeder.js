const faker = require("@faker-js/faker");
const createRandomUserSync = () =>{
    const obj = {};
    obj.firstName = faker.name.firstName();
    obj.lastName = faker.name.lastName();
    obj.email = faker.internet.email(obj.firstName, obj.lastName)
    obj.phone = faker.phone.phoneNumber();
    obj.userType = getRandomUserTypeSync();
    obj.address = createAddressSync()
    return obj;
};

const createRandomManufacturerSync = () =>{
    const obj = {};
    obj.description = faker.lorem.words(10);
    obj.name = faker.company.companyName();
    obj.address = createAddressSync();
    return obj;
};

const createBrassTypesSync = () =>{
    const items = [];

    let obj = {};
    obj.instrument = "trumpet"
    obj.type = "standard B flat"
    items.push(obj);

    obj = {};
    obj.instrument = "cornet"
    obj.type = "standard B flat"
    items.push(obj);


    obj = {};
    obj.instrument = "single horn"
    obj.type = "standard F"
    items.push(obj);

    obj = {};
    obj.instrument = "trombone"
    obj.type = "tenor"
    items.push(obj);

    obj = {};
    obj.instrument = "trombone"
    obj.type = "bass"
    items.push(obj);

    obj = {};
    obj.instrument = "clarinet"
    obj.type = "bass"
    items.push(obj);

    obj = {};
    obj.instrument = "clarinet"
    obj.type = "contrabass"
    items.push(obj);

    return items;
};

const createBrassManufacturersSync = () =>{
    const items = [];

    let obj = {};
    obj.description = "A manufacturer of wind and percussion instruments, parts, and accessories.";
    obj.name = "Buffet Crampon S.A.S.";
    obj.address = createAddressObjectSync("5 rue Maurice Berteaux",
        null,"Mantes-la-Ville","Yvelines", "78711", "FR");

    items.push(obj);

    obj = {};
    obj.description = "Offers a range from trumpets to horns";
    obj.name = "Vincent Bach Corporation";
    obj.address = createAddressObjectSync("100 Main Street",
        null,"Elkhart","IN", "46515-0310", "USA");

    obj = {};
    obj.description = "Sells trumpets, fugelhorns and trombones";
    obj.name = "Jeam Paul";
    obj.address = createAddressObjectSync("10600 NW 29th Terrace",
        null,"Doral","FL", "33172", "USA");

    items.push(obj);

    return items;
};

const createClarinetManufacturersSync = () =>{
    const items = [];

    let obj = {};
    obj.description = "A manufacturer of wind and percussion instruments, parts, and accessories.";
    obj.name = "Amati-Denak";
    obj.address = createAddressObjectSync("Dukelská 44",
        null,"Kraslice","Sokolov", "358 01", "CZ");
    items.push(obj);

    obj = {};
    obj.description = "Offers a range from traditional to bass clarinets to contrabass and contralto clarinets";
    obj.name = "Leblanc, Inc";
    obj.address = createAddressObjectSync("P.O. Box 310",
        null,"Elkhart","IN", "46515-0310", "USA");

    obj = {};
    obj.description = "Noted for their clarinets which are made in their workshops in Marsden, West Yorkshire";
    obj.name = "Hanson Clarinet Company";
    obj.address = createAddressObjectSync("Warehouse Hill",
        null,"Marsden","West Yorkshire", "HD7 6AB", "UK");

    items.push(obj);

    return items;
};

const createClarinetTypesSync = () =>{
    const items = [];

    let obj = {};
    obj.instrument = "clarinet"
    obj.type = "standard B flat"
    items.push(obj);

    obj = {};
    obj.instrument = "clarinet"
    obj.type = "A"
    items.push(obj);

    obj = {};
    obj.instrument = "clarinet"
    obj.type = "soprano"
    items.push(obj);

    obj = {};
    obj.instrument = "clarinet"
    obj.type = "bass"
    items.push(obj);

    obj = {};
    obj.instrument = "clarinet"
    obj.type = "contrabass"
    items.push(obj);

    return items;
};

const createSaxophoneTypesSync = () =>{
    const items = [];

    let obj = {};
    obj.instrument = "saxophone"
    obj.type = "soprano"
    items.push(obj);

    obj = {};
    obj.instrument = "saxophone"
    obj.type = "alto"
    items.push(obj);

    obj = {};
    obj.instrument = "saxophone"
    obj.type = "tenor"
    items.push(obj);

    obj = {};
    obj.instrument = "saxophone"
    obj.type = "baritone"
    items.push(obj);

    obj = {};
    obj.instrument = "saxophone"
    obj.type = "bass"
    items.push(obj);

    return items;
};

const createSaxophoneManufacturersSync = () =>{
    const items = [];

    let obj = {};
    obj.description = "Premier brand based in Paris, France";
    obj.name = "Selmer";
    obj.address = createAddressObjectSync("59 rue Marcadet",
        null,"Paris","Paris", "75018", "FR");
    items.push(obj);

    obj = {};
    obj.description = "Well known, respected brand";
    obj.name = "Yamaha Corporation of America";
    obj.address = createAddressObjectSync("6600 Orangethorpe Ave",
        null,"Buena Park","CA", "90620", "USA");

    obj = {};
    obj.description = "Manufacturer of a wide range of musical instruments";
    obj.name = "Cannonball Musical Instruments";
    obj.address = createAddressObjectSync("625 E Sego Lily Dr.",
        null,"Sandy","UT", "84070", "USA");

    items.push(obj);

    return items;
};

const getRandomSaxophoneSync = () =>{
    const instrument = getRandomItemFromArray(createSaxophoneTypesSync());
    const manufacturer = getRandomItemFromArray(createSaxophoneManufacturersSync());
    return createInstrumentObjectSync(instrument,manufacturer);
}

const getRandomBrassSync = () =>{
    const instrument = getRandomItemFromArray(createBrassTypesSync());
    const manufacturer = getRandomItemFromArray(createBrassManufacturersSync());
    return createInstrumentObjectSync(instrument,manufacturer);
}

const getRandomClarinetSync = () =>{
    const instrument = getRandomItemFromArray(createClarinetTypesSync());
    const manufacturer = getRandomItemFromArray(createClarinetManufacturersSync());
    return createInstrumentObjectSync(instrument,manufacturer);
}

const createInstrumentObjectSync = (instrument, manufacturer) => {
    const obj = {};
    obj. instrument = instrument.name;
    obj.type = instrument.type;
    obj.name = `${faker.commerce.productAdjective()} ${instrument.name}`
    obj.manufacturer = manufacturer
    return obj;
}

const getRandomItemFromArray = (arr) =>{
    return arr[
        Math.floor(Math.random() * arr.length)]
}

const getRandomInstrument = () => {
    const functions = [
        getRandomSaxophoneSync,
        getRandomBrassSync,
        getRandomClarinetSync,
    ]

    return getRandomItemFromArray(functions)();
}

module.exports = {getRandomSaxophoneSync,getRandomBrassSync,getRandomClarinetSync,getRandomInstrument};