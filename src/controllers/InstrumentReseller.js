'use strict';

const utils = require('../utils/writer.js');
const InstrumentReseller = require('../service/InstrumentResellers');

module.exports.getAcquisition = function getAcquisition (req, res, next, id) {
  InstrumentReseller.getAcquisition(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAcquisitions = function getAcquisitions (req, res, next) {
  InstrumentReseller.getAcquisitions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInstrument = function getInstrument (req, res, next, id) {
  InstrumentReseller.getInstrument(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInstruments = function getInstruments (req, res, next) {
  InstrumentReseller.getInstruments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getManufacturer = function getManufacturer (req, res, next, id) {
  InstrumentReseller.getManufacturer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getManufacturers = function getManufacturers (req, res, next) {
  InstrumentReseller.getManufacturers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPurchase = function getPurchase (req, res, next, id) {
  InstrumentReseller.getPurchase(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPurchases = function getPurchases (req, res, next) {
  InstrumentReseller.getPurchases()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRefurbishment = function getRefurbishment (req, res, next, id) {
  InstrumentReseller.getRefurbishment(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRefurbishments = function getRefurbishments (req, res, next) {
  InstrumentReseller.getRefurbishments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSeller = function getSeller (req, res, next, id) {
  InstrumentReseller.getSeller(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSellers = function getSellers (req, res, next) {
  InstrumentReseller.getSellers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUser = function getUser (req, res, next, id) {
  InstrumentReseller.getUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsers = function getUsers (req, res, next) {
  InstrumentReseller.getUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
