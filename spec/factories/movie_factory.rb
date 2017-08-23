FactoryGirl.define do
  factory :movie do
    vote_count 12
    title { Faker::Name.name }
    poster_path "/bnrLsunhGI5FO316sSThtAHikdV.jpg"
    release_date { Date.today }
  end

  factory :movie_with_genre, class: :movie do
    after :create do |movie|
      create_list :movie_review, 2, movie: movie
      3.times do
        movie.genres << create(:genre)
      end
    end
  end
end
