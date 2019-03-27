const init = require("../init");
const express = require("express");
const next = require("next");
const os = require('os');
const access_routes = require('./routes/access');
const api_routes = require('./routes/api');

const port = process.env.SEGUR_PORT || 3000;
const dev = process.env.SEGUR_STATE !== "production";
const app = next({
  dev
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/', access_routes);
    server.use('/', api_routes);


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