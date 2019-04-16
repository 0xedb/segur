const init = require("../init");
const express = require("express");
const next = require("next");
const os = require("os");
const api = require("./routes/api");
const express_enforces_ssl = require("express-enforces-ssl");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const port = process.env.SEGUR_PORT || 3000;
const dev = process.env.SEGUR_STATE !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app
  .prepare()
  .then(() => {
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
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use("/", api);

    server.get("/access", (req, res) => {
      return app.render(req, res, "/access", { id: req.query.id });
    });

    server.get("/enroll/:type/:token", (req, res) => {
      // console.log(req.params.type);
      return app.render(req, res, "/enroll", { type: req.params.type });
    });

    //   server.get("/enroll/:type/:token", (req, res) => {
    //     // do some validation
    //     // res.send(req.params);
    //     return app.render(req, res, '/enroll', {type: req.params.type});
    // });

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
