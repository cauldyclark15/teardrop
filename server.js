require("babel-register");

const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");
const { template } = require("lodash");
const fs = require("fs");
const App = require("./src/App").default;

const baseTemplate = fs.readFileSync("./index.html");
const appTemplate = template(baseTemplate);
const port = 9000;

const server = express();

server.use("/public", express.static("./public"));

server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context: context },
      React.createElement(App)
    )
  );

  res.write(appTemplate({ content: body }));
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
