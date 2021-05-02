
const deepmerge = require("deepmerge");
const env = require("./config/defaults");
const dev = require("./config/dev");

const config = deepmerge(dev, env);

module.exports = {
    configureWebpack: {
        mode: "development",
        devServer: {
            before(app) {
                // mock-serve the environment config
                app.get("/config.json", (req, res) => { return res.json(config) });
            }
        }
    }
}