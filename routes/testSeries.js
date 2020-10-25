'use strict';

const testSeriesService = require('../service/testSeries');
const apiResponse = require('../lib/apiResponse');

const testSeries = {
  getAllTests: function(req, res) {
    testSeriesService.getAllTests()
      .then((resp) => {
        res.json(apiResponse.success(resp));
      })
      .catch((err) => {
        res.status(err.status).json(apiResponse.failure(err));
      });
  },

  getTestById: function(req, res) {
    testSeriesService.getQuestionsByTestId(req.params.testId)
      .then((resp) => {
        res.json(apiResponse.success(resp));
      })
      .catch((err) => {
        res.status(err.status).json(apiResponse.failure(err));
      });
  },

  getTestBySection: function(req, res) {
    testSeriesService.getQuestionsBySection(req.params.section)
      .then((resp) => {
        res.json(apiResponse.success(resp));
      })
      .catch((err) => {
        res.status(err.status).json(apiResponse.failure(err));
      });
  },

  getTestBySubSection: function(req, res) {
    testSeriesService.getQuestionsBySubSection(req.params.subSection)
      .then((resp) => {
        res.json(apiResponse.success(resp));
      })
      .catch((err) => {
        res.status(err.status).json(apiResponse.failure(err));
      });
  },

  getAllQuestions: function (req, res) {
    testSeriesService.getAllQuestions()
      .then((resp) => {
        res.json(apiResponse.success(resp));
      })
      .catch((err) => {
        res.status(err.status).json(apiResponse.failure(err));
      });
  },

  saveQuestion: function(req, res) {
    testSeriesService.saveQuestion(req.body)
      .then((resp) => {
        res.json(apiResponse.success(resp));
      })
      .catch((err) => {
        res.status(err.status).json(apiResponse.failure(err));
      });
  },
};

module.exports = testSeries;
