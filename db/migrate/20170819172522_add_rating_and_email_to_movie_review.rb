class AddRatingAndEmailToMovieReview < ActiveRecord::Migration[5.1]
  def change
    add_column :movie_reviews, :email, :string
    add_column :movie_reviews, :rating, :decimal, precision: 2, scale: 1
  end
end
