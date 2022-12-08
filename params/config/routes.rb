Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/food/:fav_food' => 'home#food'
  get '/order/:number/:item' => 'home#order'
end
