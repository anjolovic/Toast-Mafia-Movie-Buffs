class MoviesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    current_sort_order = session[:sort_order] || sort_order
    @movies = serialize_collection(Movie.order(current_sort_order)
                                    .page(page_number)
                                    .includes(:genres, :reviews))
  end

  def set_sort_order
    session[:sort_order] = sort_order
    head :ok
  end

  private

  def serialize_collection(movies)
    ActiveModel::Serializer::CollectionSerializer.new(movies,
                                                      each_serializer: MovieSerializer)
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
