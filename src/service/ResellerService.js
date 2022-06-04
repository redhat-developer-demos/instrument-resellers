'use strict';


/**
 * Find an Acquisition by ID
 * Returns a single Acquisition
 *
 * id uuid ID of the purchase to return
 * returns Acquisition
 **/
exports.getAcquisition = function(id) {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = {
  "date" : "2021-06-20T01:02:03Z",
  "seller" : {
    "firstName" : "Sally",
    "lastName" : "Smith",
    "address" : {
      "city" : "Anytown",
      "zip_region_code" : "90001-1234",
      "address_1" : "123 Maple Street",
      "address_2" : "Unit 1",
      "state_province" : "CA"
    },
    "phone" : "111-222-3333",
    "id" : "id",
    "userType" : "",
    "email" : "sally.smith@example.com"
  },
  "price" : 539.5,
  "instrument" : "",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of Acquisitions
 * Returns a list of Acquisitions
 *
 * returns ArrayOfAcquisitions
 **/
exports.getAcquisitions = function() {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = [ {
  "date" : "2021-06-20T01:02:03Z",
  "seller" : {
    "firstName" : "Sally",
    "lastName" : "Smith",
    "address" : {
      "city" : "Anytown",
      "zip_region_code" : "90001-1234",
      "address_1" : "123 Maple Street",
      "address_2" : "Unit 1",
      "state_province" : "CA"
    },
    "phone" : "111-222-3333",
    "id" : "id",
    "userType" : "",
    "email" : "sally.smith@example.com"
  },
  "price" : 539.5,
  "instrument" : "",
  "id" : "id"
}, {
  "date" : "2021-06-20T01:02:03Z",
  "seller" : {
    "firstName" : "Sally",
    "lastName" : "Smith",
    "address" : {
      "city" : "Anytown",
      "zip_region_code" : "90001-1234",
      "address_1" : "123 Maple Street",
      "address_2" : "Unit 1",
      "state_province" : "CA"
    },
    "phone" : "111-222-3333",
    "id" : "id",
    "userType" : "",
    "email" : "sally.smith@example.com"
  },
  "price" : 539.5,
  "instrument" : "",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets the current healthcheck
 * Gets the current healthcheck
 *
 * returns HealthCheck
 **/
exports.getHealthCheck = function() {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = {
  "date" : new Date(),
  "message" : `The API is up and running at ${new Date()}`
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find an Instrument by ID
 * Returns a single Instrument
 *
 * id uuid ID of the purchase to return
 * returns Instrument
 **/
exports.getInstrument = function(id) {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns ArrayOfInstruments
 **/
exports.getInstruments = function() {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find an Manufacturers by ID
 * Returns a single Manufacturer
 *
 * id uuid ID of the purchase to return
 * returns Instrument
 **/
exports.getManufacturer = function(id) {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of Manufacturers
 * Returns a list of Manufacturers
 *
 * returns ArrayOfManufacturers
 **/
exports.getManufacturers = function() {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = [ {
  "address" : {
    "city" : "Anytown",
    "zip_region_code" : "90001-1234",
    "address_1" : "123 Maple Street",
    "address_2" : "Unit 1",
    "state_province" : "CA"
  },
  "name" : "Yamaha Instruments",
  "id" : "id"
}, {
  "address" : {
    "city" : "Anytown",
    "zip_region_code" : "90001-1234",
    "address_1" : "123 Maple Street",
    "address_2" : "Unit 1",
    "state_province" : "CA"
  },
  "name" : "Yamaha Instruments",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find Purchase by ID
 * Returns a single Purchase
 *
 * id uuid ID of the purchase to return
 * returns Purchase
 **/
exports.getPurchase = function(id) {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = {
  "purchaseDate" : "2021-06-20T01:02:03Z",
  "price" : 539.5,
  "instrument" : "",
  "id" : "id",
  "buyer" : {
    "firstName" : "Sally",
    "lastName" : "Smith",
    "address" : {
      "city" : "Anytown",
      "zip_region_code" : "90001-1234",
      "address_1" : "123 Maple Street",
      "address_2" : "Unit 1",
      "state_province" : "CA"
    },
    "phone" : "111-222-3333",
    "id" : "id",
    "userType" : "",
    "email" : "sally.smith@example.com"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets a list of Purchases
 * Gets a list of Purchases
 *
 * returns ArrayOfPurchases
 **/
exports.getPurchases = function() {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = [ {
  "purchaseDate" : "2021-06-20T01:02:03Z",
  "price" : 539.5,
  "instrument" : "",
  "id" : "id",
  "buyer" : {
    "firstName" : "Sally",
    "lastName" : "Smith",
    "address" : {
      "city" : "Anytown",
      "zip_region_code" : "90001-1234",
      "address_1" : "123 Maple Street",
      "address_2" : "Unit 1",
      "state_province" : "CA"
    },
    "phone" : "111-222-3333",
    "id" : "id",
    "userType" : "",
    "email" : "sally.smith@example.com"
  }
}, {
  "purchaseDate" : "2021-06-20T01:02:03Z",
  "price" : 539.5,
  "instrument" : "",
  "id" : "id",
  "buyer" : {
    "firstName" : "Sally",
    "lastName" : "Smith",
    "address" : {
      "city" : "Anytown",
      "zip_region_code" : "90001-1234",
      "address_1" : "123 Maple Street",
      "address_2" : "Unit 1",
      "state_province" : "CA"
    },
    "phone" : "111-222-3333",
    "id" : "id",
    "userType" : "",
    "email" : "sally.smith@example.com"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find Purchase by ID
 * Returns a single Refurbishments
 *
 * id uuid ID of the Refurbishments to return
 * returns Refurbishment
 **/
exports.getRefurbishment = function(id) {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = {
  "workToBeDone" : "Needs a new bridge and intonation needs to be corrected",
  "instrument" : "",
  "finishDate" : "2021-07-15T01:02:03Z",
  "id" : "id",
  "startDate" : "2021-06-20T01:02:03Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets a list of Refurbishments
 * Gets a list of Refurbishments
 *
 * returns ArrayOfRefurbishments
 **/
exports.getRefurbishments = function() {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = [ {
  "workToBeDone" : "Needs a new bridge and intonation needs to be corrected",
  "instrument" : "",
  "finishDate" : "2021-07-15T01:02:03Z",
  "id" : "id",
  "startDate" : "2021-06-20T01:02:03Z"
}, {
  "workToBeDone" : "Needs a new bridge and intonation needs to be corrected",
  "instrument" : "",
  "finishDate" : "2021-07-15T01:02:03Z",
  "id" : "id",
  "startDate" : "2021-06-20T01:02:03Z"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find User by ID
 * Returns a single User
 *
 * id uuid ID of the purchase to return
 * returns User
 **/
exports.getUser = function(id) {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = {
  "firstName" : "Sally",
  "lastName" : "Smith",
  "address" : {
    "city" : "Anytown",
    "zip_region_code" : "90001-1234",
    "address_1" : "123 Maple Street",
    "address_2" : "Unit 1",
    "state_province" : "CA"
  },
  "phone" : "111-222-3333",
  "id" : "id",
  "userType" : "",
  "email" : "sally.smith@example.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets a list of Users
 * Gets a list of Users
 *
 * returns ArrayOfUsers
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    const examples = {};
    examples['application/json'] = [ {
  "firstName" : "Sally",
  "lastName" : "Smith",
  "address" : {
    "city" : "Anytown",
    "zip_region_code" : "90001-1234",
    "address_1" : "123 Maple Street",
    "address_2" : "Unit 1",
    "state_province" : "CA"
  },
  "phone" : "111-222-3333",
  "id" : "id",
  "userType" : "",
  "email" : "sally.smith@example.com"
}, {
  "firstName" : "Sally",
  "lastName" : "Smith",
  "address" : {
    "city" : "Anytown",
    "zip_region_code" : "90001-1234",
    "address_1" : "123 Maple Street",
    "address_2" : "Unit 1",
    "state_province" : "CA"
  },
  "phone" : "111-222-3333",
  "id" : "id",
  "userType" : "",
  "email" : "sally.smith@example.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

