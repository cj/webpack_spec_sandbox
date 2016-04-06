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
