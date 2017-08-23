require "rails_helper"

RSpec.feature 'Feature::Movie#index', type: :feature do
  let(:movie_index_page) { MovieIndexPage.new }

  before(:each) do
    adventure = create(:genre, name: 'Adventure')
    fantasy = create(:genre, name: 'Fantasy')
    action = create(:genre, name: 'Action')

    create(:movie, title: 'Zootopia', release_date: 3.years.ago, popularity: 10,  genres: [fantasy])
    create(:movie, title: '12 Angry Men', release_date: 2.years.ago, popularity: 1, genres: [adventure])
    create(:movie, title: 'octopussy', release_date: 1.years.ago, popularity: 5, genres: [action])
  end

  context "adding a review" do
    scenario "should add a review to movie details" do
      movie_index_page.load
      movie_index_page.wait_for_movies_list

      movie = movie_index_page.movies_list.movie.first
      expect(movie.review_section.comments.count).to eq 0
      movie.bottom_links.leave_review.click
      movie.stars.last.click
      movie.email.set("a@b.com")
      movie.review.set("Lorem ipsum wow a great movie")
      movie.bottom_links.submit_review.click

      wait_for_ajax

      expect(movie.review_section.comments.count).to eq 1
    end

    scenario "should update rating on poster" do
      movie_index_page.load
      movie_index_page.wait_for_movies_list

      movie = movie_index_page.movies_list.movie.first
      expect(movie.review_section.comments.count).to eq 0
      movie.bottom_links.leave_review.click
      movie.stars.last.click
      movie.email.set("a@b.com")
      movie.review.set("Lorem ipsum wow a great movie")
      movie.bottom_links.submit_review.click

      wait_for_ajax

      expect(movie.poster_section.rating.count).to be > 4
    end

    scenario "should be able to cancel a review" do
      movie_index_page.load
      movie_index_page.wait_for_movies_list

      movie = movie_index_page.movies_list.movie.first
      expect(movie.review_section.comments.count).to eq 0
      movie.bottom_links.leave_review.click

      expect(movie).to have_email

      movie.bottom_links.cancel_review.click

      expect(movie).not_to have_email
    end
  end

  context "movie card" do
    scenario "elements on movie details" do
      movie_index_page.load
      movie_index_page.wait_for_movies_list

      movie = movie_index_page.movies_list.movie.first

      expect(movie.title).to have_content "12 Angry Men"
      expect(movie.poster_section.img['src']).to  include "jpg"
      expect(movie.release_date.text).not_to be_empty
      expect(movie.genres.text).to eq "Adventure"
    end
  end

  context "sort" do
    scenario "should sort by genres" do
      movie_index_page.load
      movie_index_page.wait_for_sort_by_section

      movie_index_page.sort_by_section.by_genre.click

      wait_for_ajax

      expect(movie_index_page.movies_list.movie.first.title).to have_content "octopussy"
    end

    scenario "should sort by release date" do
      movie_index_page.load
      movie_index_page.wait_for_sort_by_section
      movie_index_page.sort_by_section.by_release_date.click

      wait_for_ajax

      expect(movie_index_page.movies_list.movie.first.title).to have_content "octopussy"
    end

    scenario "should sort by title" do
      movie_index_page.load
      movie_index_page.wait_for_sort_by_section
      movie_index_page.sort_by_section.by_title.click

      wait_for_ajax

      expect(movie_index_page.movies_list.movie.first.title).to have_content "12 Angry Men"
    end
  end
end
