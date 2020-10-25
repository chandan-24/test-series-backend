'use strict';

const harperive = require('harperive');
const util = require('util');

const harperDbConfig = require('../config').harperDb;
 
const Client = harperive.Client;
const client = new Client(harperDbConfig);

const testSeries = {
  getAllTests: function(req, res, cb){
    const query = 'select * from assessments.tests';
    client.query(
      query,
      (err, response) => {
        if(err) cb(err);
        else cb(null, response);
      }
    );
  },

  getTestById: function(req, res, cb) {
    client.searchByValue(
      {
        table: 'questions',
        searchAttribute: 'test_id',
        searchValue: req.params.testId,
        attributes: ['*'],
      },
      (err, response) => {
        if(err) cb(err);
        else cb(null, response);
      }
    );
  },

  getAllQuestions: function(req, res, cb){
    const query = 'select * from assessments.questions';
    client.query(
      query,
      (err, response) => {
        if(err) cb(err);
        else cb(null, response);
      }
    );
  },

  saveQuestion: function(req, res, cb){
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
