'use strict';

const errors = {
  GE_4000: {name: 'GE_4000', message: 'Something went wrong. Please try again after some time.', status: 400},

  GE_DB_4000: {name: 'GE_DB_4000', message: 'Invalid input, Please try again with valid data.', status: 400},
  GE_DB_4001: {name: 'GE_DB_4001', message: 'No data found', status: 404},
};

module.exports = errors;