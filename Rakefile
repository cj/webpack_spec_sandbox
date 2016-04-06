require 'opal-rspec'

def run(command)
  paths = Opal.paths + [File.dirname(__FILE__)]
  flat_paths = paths.join ':'
  sh "OPAL_LOAD_PATH=#{flat_paths} #{command}"
end

desc 'dev server'
task :default do
  run 'node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors --host $RACKUP_IP'
end

desc 'build bundle.js'
task :build do
  run 'node ./node_modules/webpack/bin/webpack'
end
