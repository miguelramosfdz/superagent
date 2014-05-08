
// patch global scope with web XHR polyfill

require('xhrpoly');

//expose superagent

var Agent = module.exports = require('superagent');

/**
 * attach file to Request
 * @param  {String} name
 * @param  {String} path
 * @param  {String} filename
 */

Agent.Request.prototype.attach = function(name, path, filename) {
  if (filename) { console.warn('Setting upload\'s filename is currently not supported'); }
  if ('string' !== typeof path) throw new Error('A form field name (String) and file path (String) is required.');

  var file = Ti.Filesystem.getFile(path);
  var attachment = {};
  attachment[name] = file.read();

  this.send(attachment);

  return this;
};
