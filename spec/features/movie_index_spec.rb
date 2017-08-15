require "rails_helper"

RSpec.feature 'Feature::Movie#index', type: :feature do
  let(:movie_index_page) { MovieIndexPage.new }

  before(:each) do
    create(:movie, title: '12 Angry Men', release_date: 2.years.ago, popularity: 1)
    create(:movie, title: 'octopussy', release_date: 1.years.ago, popularity: 5)
    create(:movie, title: 'Zootopia', release_date: 3.years.ago, popularity: 10)
  end

  scenario "should sort by title" do
    movie_index_page.load
    movie_index_page.wait_for_sort_by_section

    page.execute_script("jQuery('nav').remove()")
    movie_index_page.sort_by_section.by_popularity.click
    movie_index_page.wait_for_navbar

    raise "No expectations"
  end
end
