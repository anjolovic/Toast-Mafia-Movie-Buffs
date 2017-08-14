class MovieReview < ApplicationRecord
  belongs_to :movie

  default_scope { order(id: :desc) }
end
