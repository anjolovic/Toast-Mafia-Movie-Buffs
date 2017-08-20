class MovieReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    MovieReview.create!(movie_review_params)
    if request.xhr?
      render json: { movie: serialize_movie }
    else
      head :ok
    end
  end

  private

  def serialize_movie
    movie = Movie.find(movie_review_params[:movie_id])
    MovieSerializer.new(movie).as_json
  end

  def movie_review_params
    params.require(:movie_review).permit(:movie_id, :content, :rating, :email)
  end
end
