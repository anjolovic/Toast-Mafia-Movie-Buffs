class MoviesController < ApplicationController
  include MoviesHelper
  skip_before_action :verify_authenticity_token

  def index
    movies = serialize_collection(Movie.order(current_sort_order)
                                   .page(page_number)
                                   .includes(:genres, :reviews))
    if request.xhr?
      render json: movies_index_data(movies).to_json
    else
      render 'index', locals: {movies_index_data: movies_index_data(movies)}
    end
  end

  private

  def movies_index_data(movies)
    Rails.logger.debug current_sort_order
    {
      routes: react_routes,
      movies: movies,
      sort_order: current_sort_order
    }
  end

  def current_sort_order
    if params[:sort_order].present?
      session[:sort_order] = sort_order
    end

    session[:sort_order]
  end

  def serialize_collection(movies)
    ActiveModel::Serializer::CollectionSerializer.new(movies,
                                                      serializer: MovieSerializer)
      .as_json
  end

  def page_number
    params[:page] || 1
  end

  def sort_order
    order_map = {
      title: 'title ASC',
      release_date: 'release_date DESC',
      popularity: 'popularity DESC'
    }
    order_map.fetch("#{params[:sort_order]}".to_sym, order_map[:title])
  end
end
