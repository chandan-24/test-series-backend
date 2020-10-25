'use strict';

const testSeriesService = require('../service/testSeries');

const testSeries = {
  questions: function (req, res) {
    testSeriesService.questions(req, res, (err, resp) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(resp);
      }
    });
  },

  question: function(req, res) {
    testSeriesService.question(req, res, (err, resp) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(resp);
      }
    });
  }
};

module.exports = testSeries;
