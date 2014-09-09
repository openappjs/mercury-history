var test = require('tape');
var mercury = require('mercury');
var event = require('synthetic-dom-events');
var document = require('global/document');
var window = require('global/window');
var nextTick = require('next-tick');

var History = require('../');

test("should instantiate with no options", function (t) {
  var history = History();

  t.deepEqual(history.state(), {
    path: window.location && window.location.pathname || "",
    title: document.title || "",
    data: null,
  });

  t.end();
});

test("should instantiate with path", function (t) {
  // get or set window path
  var path;
  if (window.location && window.location.pathname) {
    path = window.location.pathname;
  } else {
    window.location = window.location || {};
    path = window.location.pathname = "/testpath";
  }

  // get or set document title
  var title;
  if (document.title) {
    title = document.title;
  } else {
    title = document.title = "testtitle";
  }

  var history = History(path);

  t.deepEqual(history.state(), {
    path: path,
    title: title,
    data: null,
  });

  t.end();
});

test("should handle popstate event", function (t) {
  var history = History();

  t.equal(history.state().data, null);

  var popStateEvent = event('popstate', {
    state: "teststate",
  });

  var delegator = mercury.Delegator();

  delegator.globalListeners.onpopstate.forEach(function (handler) {
    handler(popStateEvent);
  });

  nextTick(function () {
    t.equal(history.state().data, "teststate");

    t.end();
  });
});
