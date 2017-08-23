class Movie < ApplicationRecord
  extend SortOnAssociation

  paginates_per 20

  has_many :reviews, class_name: "MovieReview"

  has_many :movie_genres
  has_many :genres, through: :movie_genres
end
