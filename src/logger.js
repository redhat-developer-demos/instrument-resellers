const {createLogger, format, transports} = require('winston')
const {combine, timestamp, prettyPrint, splat} = format;

const path = module.filename.split('/').slice(-2).join('/');

const logger = createLogger({
    level: 'info',
    handleExceptions: true,
    format: combine(timestamp(), prettyPrint(), splat()),
    transports: [new transports.Console()],
    exitOnError: false,
})

module.exports = {logger}