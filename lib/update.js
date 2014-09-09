var document = require('global/document');
var window = require('global/window');

var utils = require('./utils');

module.exports = function _History_update (options, state) {
  return {
    setState: function _History_getState (opts) {
      var s = utils.defaultState(opts);
      state.data.set(s.data);
      state.title.set(s.title);
      state.path.set(s.path);
    },
    pushState: function _History_pushState (opts) {
      var s = utils.defaultState(opts);
      window.history.pushState(s.data, s.title, s.path);
    },
    replaceState: function _History_replaceState (opts) {
      var s = utils.defaultState(opts);
      window.history.replaceState(s.data, s.title, s.path);
    },
  };
};
