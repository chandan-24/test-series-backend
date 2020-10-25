'use strict';

const system = require('./system');
const testSeries = require('./testSeries');

const base = '/v1/ts';
const baseAdmin = '/v1/admin/ts';

module.exports = function(app) {
  app.get('/health', system.healthCheck);

  app.get(base + '/tests', testSeries.getAllTests);

  app.get(base + '/questions/:testId', testSeries.getTestById);

  app.get(base + '/questions/section/:section', testSeries.getTestBySection);

  app.get(base + '/questions/subsection/:subSection', testSeries.getTestBySubSection);

  app.get(base + '/questions', testSeries.getAllQuestions);

  app.post(baseAdmin + '/question', testSeries.saveQuestion);
};
