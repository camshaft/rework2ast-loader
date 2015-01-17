/**
 * Module dependencies
 */

var rework2ast = require('rework2ast');
var utils = require('loader-utils');

module.exports = function(source, path) {
  this.cacheable && this.cacheable();

  var filename = utils.getRemainingRequest(this).replace(/^!/, "");

  return rework2ast(source, {
    filename: filename
  });
};
