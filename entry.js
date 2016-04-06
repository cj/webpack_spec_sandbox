require('./opal-rspec.rb');

var testsContext = require.context("./spec", true, /_spec\.rb$/);
testsContext.keys().forEach(testsContext);
Opal.RSpec.Core.Runner.$autorun();
