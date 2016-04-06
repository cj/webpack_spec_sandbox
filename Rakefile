require 'opal-rspec'

def run(command)
  paths = Opal.paths + [File.dirname(__FILE__)]
  flat_paths = paths.join ':'
  flat_stubs = Opal::Processor.stubbed_files.to_a.join(',')
  sh "OPAL_LOAD_PATH=#{flat_paths} OPAL_STUBS=#{flat_stubs} #{command}"
end

desc 'dev server'
task :default do
  run 'node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors'
end

desc 'build bundle.js'
task :build do
  run 'node ./node_modules/webpack/bin/webpack --progress --colors'
end

desc 'build static copies of opal and opal-rspec'
task :opal do
  require 'fileutils'
  FileUtils.mkdir_p 'build'
  builder_opal = Opal::Builder.new
  src = builder_opal.build('opal')
  File.open('assets/opal.js', 'w+') do |out|
    out << src
  end
  builder = Opal::Builder.new(stubs: Opal::Processor.stubbed_files, # stubs already specified in lib/opal/rspec.rb
                              compiler_options: { dynamic_require_severity: :ignore }) # RSpec is full of dynamic requires
  src = builder.build('opal-rspec')
  File.open('assets/opal-rspec.js', 'w+') do |out|
    out << src
  end
end
