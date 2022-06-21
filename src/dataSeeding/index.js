/**
 * The purpose this file is to be the entry
 * point by which to invoke data seeding against a
 * MongoDB database. The location of the database is declared
 * in the environment variable MONGODB_URL
 *
 * Also, this file requires that the environment variable
 * SEEDER_INSTRUMENT exists. SEEDER_INSTRUMENT supports the
 * following string values: saxophone, clarinet, or brass.
 *
 * These SEEDER_INSTRUMENT values are case sensitive.
 */

const path = require('path');
const workingDir = path.resolve(__dirname, '../.env')
require('dotenv').config({ path: workingDir });
const {logger} = require("../logger");
logger.info(process.env)

logger.info(`Seeding data using env var at ${workingDir}`);
const {seed} = require('./seeder')

if(!process.env.SEEDER_INSTRUMENT) throw new Error(`The requires environment variable SEEDER_INSTRUMENT is missing.`)

let seedCount = Number(process.env.SEEDER_COUNT) || 10;
const seedInstrument = process.env.SEEDER_INSTRUMENT;


logger.info('Seeding started')
seed(seedInstrument, seedCount)
.then(() => {
    logger.info('Seeding ended');
    process.exit(0);
})
.catch(e => {
    logger.error(e);
    process.exit(1);
})