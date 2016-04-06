require 'opal'
require 'opal-rspec'

RSpec.configure do |config|
  config.formatter = ::Opal::RSpec::BrowserFormatter
end
