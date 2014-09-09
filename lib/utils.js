var document = require('global/document');
var window = require('global/window');

module.exports.defaultState = function _History_utils_defaultState (options) {
  if (typeof options === 'string') {
    options = { path: options };
  } else {
    options = options || {};
  }

  return {
    data: options.data || (window.history && window.history.state || null),
    title: options.title || String(document.title || ""),
    path: options.path || String(document.location && document.location.pathname || ""),
  };
};
