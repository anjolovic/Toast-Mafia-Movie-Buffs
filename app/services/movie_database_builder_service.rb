class MovieDatabaseBuilderService
  MAX_SLEEP = 2

  def self.process(retrieve_upto=40)
    (1..retrieve_upto).to_a.each do | page_number |
      sleep MAX_SLEEP

      movies = Tmdb::Movie.top_rated(page: page_number)
      movies.results.each do | result |
        movie_hash = JSON.parse(result.to_json)["table"]

        tmdb_id = movie_hash.delete("id")
        movie_hash.delete("genre_ids")

        movie_hash.merge!({tmdb_id: tmdb_id})

        movie = Movie.new(movie_hash)

        movie_details = Tmdb::Movie.detail(movie.tmdb_id)

        genres = movie_details.genres.inject([]) do |acc, genre|
          acc << Genre.find_or_initialize_by(tmdb_id: genre.id ).tap do |gen|
            gen.assign_attributes(tmdb_id: genre.id, name: genre.name)
          end
          acc
        end

        movie.genres << genres
        movie.save!

        puts "movie > #{movie.title} saved"
      end
    end
  end
end
