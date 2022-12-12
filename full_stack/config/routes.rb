Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
 
  root "hike#index"
  get 'hikes' => 'hike#index', as: 'hikes'
  get 'hikes/new' => 'hike#new', as: 'new_hike'
  get 'hikes/:id/edit' => 'hike#edit', as: 'edit_hike'
  get 'hikes/:id' => 'hike#show', as: 'hike'
  patch 'hikes/:id' => 'hike#update' 
   delete 'hikes/:id' => 'hike#destroy', as: 'delete_hike'
  post 'hikes' => 'hike#create'

end
