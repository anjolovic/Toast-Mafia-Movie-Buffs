Rails.application.routes.draw do
  resources :movie_reviews, only: [:create]
  resources :movies, only: [:index]

  root "movies#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
