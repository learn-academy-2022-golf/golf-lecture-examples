Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  root 'song#home'
  get 'zeke' => 'song#zeke_song'
#  1   2      3   4     5
  get 'cesar' => 'song#cesar_song'
  get 'the_docta' => 'song#andre_song'
  get 'home' => 'song#home'
  get 'our_songs' => 'song#our_songs'
end
