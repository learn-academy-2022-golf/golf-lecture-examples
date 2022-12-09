Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "hike#index"
  get 'hikes' => 'hike#index', as: 'hikes'
  get 'hikes/new' => 'hike#new', as: 'new_hike'
  get 'hikes/:id' => 'hike#show', as: 'hike'
  post 'hikes' => 'hike#create'
end
