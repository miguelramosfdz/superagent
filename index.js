
// patch global scope with web XHR polyfill

require('tipm-xhrpoly');

//expose superagent

var Agent = module.exports = require('visionmedia-superagent');

/**
 * attach file to Request
 * @param  {String} name
 * @param  {String} path
 * @param  {String} filename
 */

Agent.Request.prototype.attach = function(name, path, filename) {
  if (filename) { console.warn('Setting upload\'s filename is currently not supported'); }

  var file = Ti.Filesystem.getFile(path);
  var attachment = {};
  attachment[name] = file.read();

  this.type('multipart/form-data');
  this.send(attachment);

  return this;
};
