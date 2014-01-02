
// patch global scope with web XHR polyfill

require('tipm-xhrpoly');

//expose superagent

module.exports = require('superagent');