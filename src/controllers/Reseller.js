'use strict';

const utils = require('../utils/writer.js');
const Reseller = require('../service/ResellerService');
const {logger} = require('../logger')

module.exports.getAcquisition = function getAcquisition (req, res, next, id) {
  Reseller.getAcquisition(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAcquisitions = function getAcquisitions (req, res, next) {
  Reseller.getAcquisitions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHealthCheck = function getHealthCheck (req, res, next) {
  Reseller.getHealthCheck()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInstrument = function getInstrument (req, res, next, id) {
  Reseller.getInstrument(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInstruments = function getInstruments (req, res, next) {
  Reseller.getInstruments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getManufacturer = function getManufacturer (req, res, next, id) {
  Reseller.getManufacturer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getManufacturers = function getManufacturers (req, res, next) {
  Reseller.getManufacturers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPurchase = function getPurchase (req, res, next, id) {
  Reseller.getPurchase(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPurchases = function getPurchases (req, res, next) {
  Reseller.getPurchases()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRefurbishment = function getRefurbishment (req, res, next, id) {
  Reseller.getRefurbishment(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRefurbishments = function getRefurbishments (req, res, next) {
  Reseller.getRefurbishments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUser = function getUser (req, res, next, id) {
  Reseller.getUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsers = function getUsers (req, res, next) {
  Reseller.getUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
