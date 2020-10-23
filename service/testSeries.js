'use strict';

const harperive = require('harperive');

const harperDbConfig = require('../config').harperDb;

const DB_CONFIG = {
  harperHost: harperDbConfig.host,
  username: harperDbConfig.username,
  password: harperDbConfig.password,
  schema: harperDbConfig.schema,
};
 
const Client = harperive.Client;
const client = new Client(DB_CONFIG);

const testSeries = {
  questions: function(req, res, cb){
    const query = 'select * from assessments.questions';
    client.query(
      query,
      (err, response) => {
        if(err) cb(err);
        else cb(null, response);
      }
    );
  }
};

module.exports= testSeries;
