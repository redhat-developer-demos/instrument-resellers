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
    //if (! config.serverHost) throw new Error("No config.serverHost defined");

    const serverHost = config.serverHost || "http://localhost";
    const serverPort = config.serverHost || 8088;
    const vendorName = config.vendorName || "Unknown";
    //if (! config.serverPort) throw new Error("No config.serverPort defined");

    const obj = yaml.load(fs.readFileSync(config.inputYamlPath, {encoding: 'utf-8'}));
    //TODO clean up environment variable dependency processing
    obj.info.title = vendorName
    //if (config.vendorName) obj.info.title = config.vendorName;
    //if ( config.serverHost &&  config.serverPort ) obj.servers[0]= {url: `${config.serverHost}:${config.serverPort}/v1`}

    obj.servers[0]= {url: `${serverHost}:${serverPort}/v1`}

    let yamlStr = yaml.safeDump(obj);
    console.log(`Yamilizing INPUT ${config.inputYamlPath} to OUTPUT ${config.outputYamlPath} at ${Date.now()}`);
    fs.writeFileSync(config.outputYamlPath, yamlStr, 'utf8');
    console.log(`Yamilizing at ${Date.now()}`);
    return config.outputYamlPath;
}

module.exports = {modifyOpenApiSpecToVendorSync}