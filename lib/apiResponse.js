'use strict';

const globalConstants = require('../constants/globalConstants');

const apiResponse = {
  success: function(data) {
    const responseObject = {
      'status': globalConstants.API_RESPONSE_STATUS.SUCCESS,
      'errors': null,
      'data': data,
    };
    return responseObject;
  },
  failure: function(error) {
    const responseObject = {
      'status': globalConstants.API_RESPONSE_STATUS.FAILURE,
      'errors': error,
      'data': null,
    };
    return responseObject;
  }
};

module.exports = apiResponse;
