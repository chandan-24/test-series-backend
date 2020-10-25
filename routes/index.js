'use strict';

const system = require('./system');
const testSeries = require('./testSeries');

const base = '/v1/ts';
const baseAdmin = '/v1/admin/ts';

module.exports = function(app) {
  app.get('/health', system.healthCheck);

  app.get(base + '/questions', testSeries.questions);

  app.post(baseAdmin + '/question', testSeries.question);
};
