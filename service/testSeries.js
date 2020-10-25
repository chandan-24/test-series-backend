'use strict';

const harperive = require('harperive');
const util = require('util');

const Questions = require('../db/operation/questions');
const Tests = require('../db/operation/tests');
const ApiError = require('../lib/error');
const harperDbConfig = require('../config').harperDb;
const errors = require('../constants/errors');

const Client = harperive.Client;
const client = new Client(harperDbConfig);
const questions = new Questions(client);
const tests = new Tests(client);

const testSeries = {
  getAllTests: function(){
    return new Promise((resolve, reject) => {
      tests.getAll()
        .then((resp) => {
          if (resp.length === 0) {
            util.log('[GET ALL TEST] :: No Tests Found');
            return reject(new ApiError(errors.GE_DB_4001.status, errors.GE_DB_4001.message, errors.GE_DB_4001.name));
          }
          return resolve(resp);
        })
        .catch((err) =>  {
          util.log('[GET ALL TEST] :: error occurred :: ', err);
          return reject(new ApiError(errors.GE_DB_4000.status, errors.GE_DB_4000.message, errors.GE_DB_4000.name));
        });
    });
  },

  getQuestionsByTestId: function(testId) {
    return new Promise((resolve, reject) => {
      questions.getByAttribute('test_id', testId)
        .then((resp) => {
          if (resp.length === 0) {
            util.log('[GET QUESTIONS BY TEST ID] :: No Questions Found');
            return reject(new ApiError(errors.GE_DB_4001.status, errors.GE_DB_4001.message, errors.GE_DB_4001.name));
          }
          return resolve(resp);
        })
        .catch((err) =>  {
          util.log('[GET QUESTIONS BY TEST ID] :: error occurred :: ', err);
          return reject(new ApiError(errors.GE_DB_4000.status, errors.GE_DB_4000.message, errors.GE_DB_4000.name));
        });
    });
  },

  getQuestionsBySection: function(section) {
    return new Promise((resolve, reject) => {
      questions.getByAttribute('section', section)
        .then((resp) => {
          if (resp.length === 0) {
            util.log('[GET QUESTIONS BY SECTION] :: No Questions Found');
            return reject(new ApiError(errors.GE_DB_4001.status, errors.GE_DB_4001.message, errors.GE_DB_4001.name));
          }
          return resolve(resp);
        })
        .catch((err) =>  {
          util.log('[GET QUESTIONS BY SECTION] :: error occurred :: ', err);
          return reject(new ApiError(errors.GE_DB_4000.status, errors.GE_DB_4000.message, errors.GE_DB_4000.name));
        });
    });
  },

  getQuestionsBySubSection: function(subSection) {
    return new Promise((resolve, reject) => {
      questions.getByAttribute('sub_section', subSection)
        .then((resp) => {
          if (resp.length === 0) {
            util.log('[GET QUESTIONS BY SUBSECTION] :: No Questions Found');
            return reject(new ApiError(errors.GE_DB_4001.status, errors.GE_DB_4001.message, errors.GE_DB_4001.name));
          }
          return resolve(resp);
        })
        .catch((err) =>  {
          util.log('[GET QUESTIONS BY SUBSECTION] :: error occurred :: ', err);
          return reject(new ApiError(errors.GE_DB_4000.status, errors.GE_DB_4000.message, errors.GE_DB_4000.name));
        });
    });
  },

  getAllQuestions: function(){
    return new Promise((resolve, reject) => {
      questions.getAll()
        .then((resp) => {
          if (resp.length === 0) {
            util.log('[GET ALL QUESTIONS] :: No Questions Found');
            return reject(new ApiError(errors.GE_DB_4001.status, errors.GE_DB_4001.message, errors.GE_DB_4001.name));
          }
          return resolve(resp);
        })
        .catch((err) =>  {
          util.log('[GET ALL QUESTIONS] :: error occurred  :: ', err);
          return reject(new ApiError(errors.GE_DB_4000.status, errors.GE_DB_4000.message, errors.GE_DB_4000.name));
        });
    });
  },

  saveQuestion: function(data){
    util.log('[ADD QUESTION] :: question(s) recieved :: ', data);
    return new Promise((resolve, reject) => {
      questions.save(data)
        .then((resp) => resolve(resp))
        .catch((err) =>  {
          util.log('[ADD QUESTIONS] :: error occured :: ', err);
          return reject(new ApiError(errors.GE_DB_4000.status, errors.GE_DB_4000.message, errors.GE_DB_4000.name));
        });
    });
  }
};

module.exports= testSeries;
