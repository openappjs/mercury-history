var mercury = require('mercury');

var utils = require('./utils');

module.exports = function _History_state (options) {

  var s = utils.defaultState(options);

  return mercury.struct({
    data: mercury.value(s.data),
    title: mercury.value(s.title),
    path: mercury.value(s.path),
  });
};
