'use strict';

const questionsModel = require('../model/questions');

function Questions(client) {
  this.client = client;
  this.name = questionsModel.name;
}

Questions.prototype.getAll = function() {
  const query = 'select * from assessments.questions';
  return new Promise((resolve, reject) => {
    this.client.query(
      query,
      (err, response) => {
        if(err) return reject(err);
        else return resolve(response.data);
      }
    );
  });
};

Questions.prototype.getByAttribute = function(attributeName, attributeValue) {
  const queryOption = {
    table: this.name,
    searchAttribute: attributeName,
    searchValue: attributeValue,
    attributes: questionsModel.attributes,
  };
  return new Promise((resolve, reject) => {
    this.client.searchByValue(
      queryOption,
      (err, response) => {
        if(err) return reject(err);
        else return resolve(response.data);
      }
    );
  });
};

Questions.prototype.save = function(records) {
  const insertOptions = {
    table: questionsModel.name,
    records,
  };
  return new Promise((resolve, reject) => {
    this.client.insert(
      insertOptions,
      (err, response) => {
        if(err) return reject(err);
        else return resolve(response.data);
      }
    );
  });
};

module.exports = Questions;
