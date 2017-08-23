class MovieSerializerStrippedDown < ActiveModel::Serializer
  attributes :id, :title, :rating

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
