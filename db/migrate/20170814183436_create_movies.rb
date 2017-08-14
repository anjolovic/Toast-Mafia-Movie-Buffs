class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.integer :vote_count
      t.integer :tmdb_id
      t.boolean :video
      t.decimal :vote_average, precision: 2, scale: 1
      t.string :title
      t.decimal :popularity, precision: 10, scale: 8
      t.string :poster_path
      t.string :original_language
      t.string :original_title
      t.string :backdrop_path
      t.boolean :adult
      t.text :overview
      t.date :release_date

      t.timestamps
    end
  end
end
