'use strict';

const util = require('util');
const errors = require('../constants/errors');

var error = function(httpStatus, message, errorCode) {
  this.status = httpStatus || errors.GE_4000.status;
  this.code = errorCode || errors.GE_4000.name;
  this.message = message || errors.GE_4000.message;
  this.toString = function() {
    return this.message;
  };

  Error.captureStackTrace(this, error);
};

util.inherits(error, Error);

module.exports = error;
