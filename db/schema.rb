# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170814185309) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "genres", force: :cascade do |t|
    t.integer "tmdb_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movie_genres", force: :cascade do |t|
    t.integer "movie_id"
    t.integer "genre_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movie_reviews", force: :cascade do |t|
    t.text "content"
    t.bigint "movie_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_id"], name: "index_movie_reviews_on_movie_id"
  end

  create_table "movies", force: :cascade do |t|
    t.integer "vote_count"
    t.integer "tmdb_id"
    t.boolean "video"
    t.decimal "vote_average", precision: 2, scale: 1
    t.string "title"
    t.decimal "popularity", precision: 10, scale: 8
    t.string "poster_path"
    t.string "original_language"
    t.string "original_title"
    t.string "backdrop_path"
    t.boolean "adult"
    t.text "overview"
    t.date "release_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["popularity"], name: "index_movies_on_popularity"
    t.index ["vote_average"], name: "index_movies_on_vote_average"
    t.index ["vote_count"], name: "index_movies_on_vote_count"
  end

end
