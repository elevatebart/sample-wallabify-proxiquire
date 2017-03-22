'use strict';

//because wallaby has issues with proxyquireify we need to patch it live
//https://github.com/wallabyjs/wallabify/issues/2

var wallabyProxyquirePostprocessor = require('wallabify-proxyquire-postprocessor')({
    // browserify options, such as
      plugin: ['proxyquire-universal'],
    },
    // IMPORTANT: list all variables that you assign like var proxyquire = require('proxyquireify')(require);
    ['proxyquire']
);

module.exports = function () {
  return {
    // set `load: false` to all of the browserified source files and tests,
    // as they should not be loaded in browser,
    // their browserified versions will be loaded instead
    files: [
      {pattern: 'areBothArgumentsArrays.js', load: false}
    ],

    tests: [
      {pattern: 'areBothArgumentsArrays.Spec.js', load: false}
    ],

    postprocessor: wallabyProxyquirePostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    env: {
      runner: require('phantomjs-prebuilt').path
    }
  };
};