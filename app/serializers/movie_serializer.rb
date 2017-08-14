class MovieSerializer < ActiveModel::Serializer
  attributes :id, :vote_count, :title, :poster_path, :release_date, :genres, :reviews

  def genres
    object.genres.map(&:name)
  end

  def reviews
    object.reviews.map{| review | [review.id, review.content]}
  end
end
