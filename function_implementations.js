// To implement function utility in lodash
//base setup

var _ = (function() {
  "use strict";

  var methods = {};

  methods.bind = function(func, obj, ...args) {
    return function(...args1) {
      return func.apply(obj, [...args, ...args1]);
    };
  };
  return methods;
})();
