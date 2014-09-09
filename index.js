var mercury = require('mercury');

function History (options) {

  var events = mercury.input(['onPopState']);

  var state = require('./lib/state')(options);
  var update = require('./lib/update')(options, state);
  require('./lib/input')(options, events, update)

  return {
    state: state,
    update: update,
  };
}

module.exports = History;
