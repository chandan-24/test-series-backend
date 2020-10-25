'use strict';

const harperive = require('harperive');
const util = require('util');

const Questions = require('../db/operation/questions');
const Tests = require('../db/operation/tests');
const harperDbConfig = require('../config').harperDb;
 
const Client = harperive.Client;
const client = new Client(harperDbConfig);
const questions = new Questions(client);
const tests = new Tests(client);

const testSeries = {
  getAllTests: function(){
    return new Promise((resolve, reject) => {
      tests.getAll()
        .then((resp) => resolve(resp))
        .catch((err) => reject(err));
    });
  },

  getQuestionsByTestId: function(testId) {
    return new Promise((resolve, reject) => {
      questions.getByAttribute('test_id', testId)
        .then((resp) => resolve(resp))
        .catch((err) => reject(err));
    });
  },

  getQuestionsBySection: function(section) {
    return new Promise((resolve, reject) => {
      questions.getByAttribute('section', section)
        .then((resp) => resolve(resp))
        .catch((err) => reject(err));
    });
  },

  getQuestionsBySubSection: function(subSection) {
    return new Promise((resolve, reject) => {
      questions.getByAttribute('sub_section', subSection)
        .then((resp) => resolve(resp))
        .catch((err) => reject(err));
    });
  },

  getAllQuestions: function(){
    return new Promise((resolve, reject) => {
      questions.getAll()
        .then((resp) => resolve(resp))
        .catch((err) => reject(err));
    });
  },

  saveQuestion: function(data){
    util.log('[ADD QUESTION] :: question(s) recieved :: ', data);
    return new Promise((resolve, reject) => {
      questions.save(data)
        .then((resp) => resolve(resp))
        .catch((err) => reject(err));
    });
  }
};

module.exports= testSeries;
