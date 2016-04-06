require 'opal'
require 'opal-rspec'
require 'a_spec'

RSpec.configure do |config|
  config.formatter = ::Opal::RSpec::BrowserFormatter
end

::RSpec::Core::Runner.autorun
