'use strict';

const harperive = require('harperive');
const util = require('util');

const harperDbConfig = require('../config').harperDb;
 
const Client = harperive.Client;
const client = new Client(harperDbConfig);

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
  },

  question: function(req, res, cb){
    util.log('[ADD QUESTION] :: question(s) recieved :: ', req.body);
    client.insert(
      {
        table: 'questions',
        records: req.body,
      },
      (err, response) => {
        if(err) cb(err);
        else cb(null, response);
      }
    );
  }
};

module.exports= testSeries;
