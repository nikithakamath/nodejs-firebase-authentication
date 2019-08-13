'use strict';

const express = require('express');
const port = 8080;
const app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(require('./controllers'));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
