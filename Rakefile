require 'opal-rspec'

def run(command)
  paths = Opal.paths + [File.dirname(__FILE__)]
  flat_paths = paths.join ':'
  flat_stubs = Opal::Processor.stubbed_files.to_a.join(',')
  sh "OPAL_LOAD_PATH=#{flat_paths} OPAL_STUBS=#{flat_stubs} #{command}"
end

desc 'dev server'
task :default => :dependencies do
  run 'node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors'
end

desc 'build bundle.js'
task :build => :dependencies do
  run 'node ./node_modules/webpack/bin/webpack --progress --colors'
end

def build_file(dependency, file)
  require 'fileutils'
  FileUtils.mkdir_p 'assets'
  builder = Opal::Builder.new(stubs: Opal::Processor.stubbed_files, # stubs already specified in lib/opal/rspec.rb
                              compiler_options: { dynamic_require_severity: :ignore }) # RSpec is full of dynamic requires
  src = builder.build(dependency)
  File.open(file, 'w+') do |out|
    out << src
  end
end

file('assets/opal.js') { build_file('opal', 'assets/opal.js') }
file('assets/opal-rspec.js') { build_file('opal-rspec', 'assets/opal-rspec.js') }

task :dependencies => ['assets/opal.js', 'assets/opal-rspec.js' ]
