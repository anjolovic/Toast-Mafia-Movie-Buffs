Rails.application.routes.draw do
  resources :movies, only: [:index]
  resources :movie_reviews, only: [:create]

  post 'movies/set_sort_order'

  root "movies#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
