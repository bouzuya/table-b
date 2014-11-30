var table = require('text-table');
var eaw = require('eastasianwidth');

module.exports = function(rows, options) {
  options = options || {};
  if (!options.stringLength) {
    options.stringLength = function(s) {
      return eaw.length(s);
    };
  }
  return table(rows, options);
};
