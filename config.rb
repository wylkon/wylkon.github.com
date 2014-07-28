set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'


activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch   = "master" # default: gh-pages
end

configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Use relative URLs
  activate :relative_assets
  set :relative_links, true

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
