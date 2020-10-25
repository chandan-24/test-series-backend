'use strict';

const testsModel = require('../model/tests');

function Tests(client) {
  this.client = client;
  this.name = testsModel.name;
}

Tests.prototype.getAll = function() {
  const query = 'select * from assessments.tests';
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

Tests.prototype.getByAttribute = function(attributeName, attributeValue) {
  const queryOption = {
    table: this.name,
    searchAttribute: attributeName,
    searchValue: attributeValue,
    attributes: testsModel.attributes,
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

Tests.prototype.save = function(records) {
  const insertOptions = {
    table: testsModel.name,
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

module.exports = Tests;