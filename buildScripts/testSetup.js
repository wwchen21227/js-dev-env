
// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Macha doesn't understand.
require.extensions['.css'] = function(){};
