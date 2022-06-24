const yaml = require('js-yaml');
fs = require('fs');
const {logger} = require("../logger");
/**
 *
 * @param config is a JSON object as follows:
 * {
 *     inputYamlPath: string,
 *     outputYamlPath, string,
 *     vendorName: string,
 *     serverHost: string,
 *     serverPort: string
 * }
 */
const modifyOpenApiSpecToVendorSync = (config) => {
    if (! config.inputYamlPath) throw new Error("No config.inputYamlPath defined");
    if (! config.outputYamlPath) throw new Error("No config.outputYamlPath defined");

    const serverHost = config.serverHost || "http://localhost";
    const serverPort = config.serverPort || 8088;
    const vendorName = config.vendorName || "Unknown";

    const obj = yaml.load(fs.readFileSync(config.inputYamlPath, {encoding: 'utf-8'}));
    obj.info.title = vendorName
    logger.info(`url: ${obj.servers[0]}`);
    obj.servers[0].url = `${serverHost}:${serverPort}/v1`;
    logger.info("Yamilzer uses " + JSON.stringify(obj.servers[0].url));

    let yamlStr = yaml.safeDump(obj);
    logger.info(`Yamilizing INPUT ${config.inputYamlPath} to OUTPUT ${config.outputYamlPath} at ${Date.now()}`);
    fs.writeFileSync(config.outputYamlPath, yamlStr, 'utf8');
    logger.info(`Yamilizing`);
    return config.outputYamlPath;
}

module.exports = {modifyOpenApiSpecToVendorSync}