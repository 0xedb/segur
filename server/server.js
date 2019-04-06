const init = require("../init");
const express = require("express");
const next = require("next");
const os = require("os");
const access_routes = require("./routes/access");
const api_routes = require("./routes/api");
const express_enforces_ssl = require("express-enforces-ssl");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const port = process.env.SEGUR_PORT || 3000;
const dev = process.env.SEGUR_STATE !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // disable forced https in development
    if (!dev) {
      server.enable("trust proxy");
      server.use(express_enforces_ssl());
    }

    server.use(
      helmet(
        helmet.hsts({
          maxAge: 31536000,
          includeSubDomains: true,
          preload: true
        })
      )
    );
    server.use(bodyParser.json());
    server.use("/", access_routes);
    server.use("/", api_routes);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) console.log(err);
      console.log(`Segur's ON: \t ${os.hostname()}:${port}`);
    });
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
