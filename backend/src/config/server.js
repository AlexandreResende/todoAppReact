
const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./cors');

const port = process.env.PORT || 3000;

const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(allowCors)
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

module.exports = app;
