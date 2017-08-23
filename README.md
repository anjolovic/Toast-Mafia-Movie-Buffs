# Toast Mafia Movie Buffs (I know, it's a name, right!)

## How to Run the application locally

1. Run: `bundle install`
2. Run `rails db:create` followed by `rails db:migrate`
3. Run: `yarn install` to install webpacker dependencies
4. Run: `rails util:build_db` in fetch data from the Movie DB API
5. Run: `rails server`
6. In a new terminal, run `bin/webpack-dev-server`, this will start webpack and compile React to JavaScript
7. Check the site for screens.

## Run Tests
1. Run: `RAILS_ENV=test bundle exec ./bin/webpack`
2. Run: `bundle exec rspec spec/features`

Requires google-chrome and chrome-webdriver installed.
Please install chrome-webdriver: run `brew install chromedriver`
