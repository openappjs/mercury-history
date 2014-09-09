var mercury = require('mercury');

module.exports = function _History_input (options, events, update) {

  // setup input handlers
  events.onPopState(function (ev) {
    update.setState({
      data: ev.state,
    });
  });

  // setup input listeners
  var delegator = mercury.Delegator();

  delegator.addGlobalEventListener(
    "onpopstate",
    events.onPopState
  );
};
