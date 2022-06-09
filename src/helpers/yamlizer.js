const yaml = require('js-yaml');
fs = require('fs');
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
    //if (! config.vendorName) throw new Error("No config.vendorName defined");
    if (! config.serverHost) throw new Error("No config.serverHost defined");
    if (! config.serverPort) throw new Error("No config.serverPort defined");

    const obj = yaml.load(fs.readFileSync(config.inputYamlPath, {encoding: 'utf-8'}));
    //TODO change the value as needed

    if (config.vendorName) obj.info.title = config.vendorName;
    if ( config.serverHost &&  config.serverPort ) obj.servers[0]= {url: `${config.serverHost}:${config.serverPort}`}

    let yamlStr = yaml.safeDump(obj);
    fs.writeFileSync(config.outputYamlPath, yamlStr, 'utf8');

    return config.outputYamlPath;
}

module.exports = {modifyOpenApiSpecToVendorSync}