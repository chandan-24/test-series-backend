'use strict';

const system = {
  healthCheck: function healthCheck(req, res) {
    res.sendStatus(200);
  },
};

module.exports = system;
