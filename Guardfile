# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard :coffeescript, :input => 'coffee', :output => 'public/js', :bare => true

guard 'livereload' do
  watch(%r{views/.+\.(jade)$})
  watch(%r{public/.+\.(css|js|html)})
  # Rails Assets Pipeline
  watch(%r{(/assets/\w+/(.+\.(css|js|html))).*}) { |m| "/assets/#{m[3]}" }
end
