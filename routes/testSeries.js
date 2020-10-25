'use strict';

const testSeriesService = require('../service/testSeries');

const testSeries = {
  getAllTests: function(req, res) {
    testSeriesService.getAllTests(req, res, (err, resp) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(resp);
      }
    });
  },

  getTestById: function(req, res) {
    testSeriesService.getTestById(req, res, (err, resp) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(resp);
      }
    });
  },

  getAllQuestions: function (req, res) {
    testSeriesService.getAllQuestions(req, res, (err, resp) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(resp);
      }
    });
  },

  saveQuestion: function(req, res) {
    testSeriesService.saveQuestion(req, res, (err, resp) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(resp);
      }
    });
  },
};

module.exports = testSeries;
