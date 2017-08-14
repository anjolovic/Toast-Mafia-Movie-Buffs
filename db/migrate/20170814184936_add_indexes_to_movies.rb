class AddIndexesToMovies < ActiveRecord::Migration[5.1]
  def change
    add_index :movies, :popularity
    add_index :movies, :vote_average
    add_index :movies, :vote_count
  end
end
