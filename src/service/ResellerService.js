'use strict';
const {logger} = require('../logger');

const {getAcquisition,
  getAcquisitions,
  getPurchases,
  getPurchase,
  getRefurbishments,
  getRefurbishment,
  getInstruments,
  getInstrument,
  getManufacturer,
  getManufacturers,
  getUser,
  getUsers} = require('../dataManager/mongoose/index')

/**
 * Find an Acquisition by ID
 * Returns a single Acquisition
 *
 * id uuid ID of the purchase to return
 * returns Acquisition
 **/
exports.getAcquisition = async function(id) {
  const item = await getAcquisition(id);
  return item;
}


/**
 * Returns a list of Acquisitions
 * Returns a list of Acquisitions
 *
 * returns ArrayOfAcquisitions
 **/
exports.getAcquisitions = async function() {
  const items = await getAcquisitions();
  return items;
}


/**
 * Gets the current healthcheack
 * Gets the current healthcheack
 *
 * returns HealthCheck
 **/
exports.getHealthCheck = async function() {
  const vendor = process.env.RESELLER_NAME || "Vendor Not Known"
  logger.info(`Healthcheck message: Things are A-OK at ${vendor}`);
  return {
    "date" : new Date(Date.now()).toISOString(),
    "message" : `Things are A-OK at ${vendor}`
  }
}


/**
 * Find an Instrument by ID
 * Returns a single Instrument
 *
 * id uuid ID of the purchase to return
 * returns Instrument
 **/
exports.getInstrument = async function(id) {
  const item = await getInstrument(id);
  return item;
}

/**
 *
 * returns ArrayOfInstruments
 **/
exports.getInstruments = async function() {
  const items = await getInstruments();
  return items;
}


/**
 * Find an Manufacturers by ID
 * Returns a single Manufacturer
 *
 * id uuid ID of the purchase to return
 * returns Instrument
 **/
exports.getManufacturer = async function(id) {
  const item = await getManufacturer(id);
  return item;
}


/**
 * Returns a list of Manufacturers
 * Returns a list of Manufacturers
 *
 * returns ArrayOfManufacturers
 **/
exports.getManufacturers = async function() {
  const items = await getManufacturers();
  return items;
}

/**
 * Find Purchase by ID
 * Returns a single Purchase
 *
 * id uuid ID of the purchase to return
 * returns Purchase
 **/
exports.getPurchase = async function(id) {
  const items = await getPurchase(id);
  return items;
}


/**
 * Gets a list of Purchases
 * Gets a list of Purchases
 *
 * returns ArrayOfPurchases
 **/
exports.getPurchases = async function() {
  const items = await getPurchases();
  return items;
}


/**
 * Find Purchase by ID
 * Returns a single Refurbishments
 *
 * id uuid ID of the Refurbishments to return
 * returns Refurbishment
 **/
exports.getRefurbishment = async function(id) {
  const items = await getRefurbishment(id);
  return items;
}


/**
 * Gets a list of Refurbishments
 * Gets a list of Refurbishments
 *
 * returns ArrayOfRefurbishments
 **/
exports.getRefurbishments = async function() {
  const items = await getRefurbishments();
  return items;
}


/**
 * Find User by ID
 * Returns a single User
 *
 * id uuid ID of the purchase to return
 * returns User
 **/
exports.getUser = async function(id) {
  const item = await getUser(id);
  return item;
}


  /**
   * Gets a list of Users
   * Gets a list of Users
   *
   * returns ArrayOfUsers
   **/
  exports.getUsers = async function() {
    const items = await getUsers();
    return items;
  }

