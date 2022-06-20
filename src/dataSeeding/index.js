const path = require('path');
const workingDir = path.resolve(__dirname, '../.env')
require('dotenv').config({ path: workingDir });
const {logger} = require("../logger");
logger.info(process.env)

logger.info(`Seeding vars at ${workingDir}`);
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