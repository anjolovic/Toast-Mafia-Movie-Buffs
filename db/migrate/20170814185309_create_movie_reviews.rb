class CreateMovieReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :movie_reviews do |t|
      t.text :content
      t.references :movie

      t.timestamps
    end
  end
end
