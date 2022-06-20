const {createLogger, format, transports} = require('winston')
const {combine, timestamp, prettyPrint, splat} = format;

const logger = createLogger(({
    level: 'info',
    format: combine(timestamp(), prettyPrint(), splat()),
    transports: [new transports.Console()],
    exitOnError: false,
}))

module.exports = {logger}