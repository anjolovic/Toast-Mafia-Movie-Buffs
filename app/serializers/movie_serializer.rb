class MovieSerializer < ActiveModel::Serializer
  attributes :id, :vote_count, :title, :poster_path, :release_date, :genres, :reviews, :rating

  def genres
    object.genres.map(&:name)
  end

  def rating
    reviews = object.reviews.where.not(rating: nil)
    review_count = reviews.count
    if review_count > 0
      round_to_nearest_point_five(reviews.sum(&:rating)/review_count)
    else
      0
    end
  end

  private

  def round_to_nearest_point_five(value)
    ((value * 2).ceil)/2.0
  end
end
