# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "css"
images_dir = "img"
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
preferred_syntax = :scss

the_hold_options = {
  :login => "leolin", # 你的帳號
  :token => "d2b7c1770c0703f9b3996dd027402105", # 你的 API Key
  :project => "offcial", # 專案名稱, 會變成 http://your-project-name.osakihsieh.the-hold.handlino.com/
  # :project_site_password => "yourprojectpass", # 如果你想要把專案上鎖
  :host => "http://the-hold.handlino.com/"
}