class MovieReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    MovieReview.create!(movie_review_params)
    head :ok
  end

  private

  def movie_review_params
    params.require(:movie_review).permit(:movie_id, :content)
  end
end
