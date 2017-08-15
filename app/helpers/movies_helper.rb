module MoviesHelper
  def react_routes
    {
      movies_set_sort_order_path: movies_set_sort_order_path,
      movie_reviews_path: movie_reviews_path
    }
  end
end
