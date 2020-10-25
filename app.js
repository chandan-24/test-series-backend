'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PORT = require('./config').port;
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

require('./routes')(app);
app.listen(PORT, () => console.log(`Test Series App listening at http://localhost:${PORT}`));
