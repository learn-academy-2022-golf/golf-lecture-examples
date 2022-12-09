# Full Stack Rails 12/9/22 

## App set up
  $  rails new full_stack -d postgresql -T 
  $  cd full_stack/
  $  rails db:create
  $  rails db:drop
  $  rails db:create
  $  rails g controller Hike 
  $  rails g model Hike name:string hike_distance:float difficulty:integer
  $  rails db:migrate

# CRUD Action Read

  ## Index
  ### Controller
    ```ruby
    def index
        @hikes = Hike.all
    end
    ```
  ### Route
    ```ruby
    get 'hikes' => 'hike#index'
    ```
  ### View
  ```ruby
    <h1> All hikes</h1>
    <% @hikes.map do |hike| %>
      <%= hike.name %>
    <% end %>
  ```


  ## Show
  ### Controller
  ```ruby
  def show
   @hike = Hike.find(params[:id])
  end
  ```
  ### Route
  `get 'hikes/:id' => 'hike#show'`
  ### View
  /show.html.erb
  ```html
  <h1> Let's go on a hike </h1>
  <%= @hike.name %>
  <%= @hike.description %>
  have you been on this hike? 
  <%= @hike.hiked %>
```

  # _____________________
## link_to
> some way to get to this url dynamically
> index.html.erb

    <h1> All Hiking trails</h1>

    <% @hikes.map do |value| %>
        <%= link_to value.name, "hikes/#{value.id}" %>
    <% end  %>

### routes.rb update with alias "as"
```ruby
get 'hikes' => 'hike#index', as: 'hikes'
get 'hikes/:id' => 'hike#show', as: 'hike'
```

to use the alias we append the rails built in keyword _path

> index.html.erb
```html
    <h1> All hikes</h1>

    <% @hikes.map do |value| %>
        <%= link_to value.name, hike_path(value) %>
    <%end  %>
```
> show.html.erb
```html
  <h1> Let's go on a hike </h1>
  <%= @hike.name %>
  <%= @hike.description %>
  have you been on this hike? 
  <%= @hike.hiked %>
  <%= link_to 'back to all hikes', hikes_path %>
```

# CRUD Action - CREATE

## New
  ### Controller
  def new
  end
  ### Routes
  get 'hikes/new' => 'hike#new', as: 'new_hike'
  ### Views
  ```ruby
<h3>Add a new Hike</h3>

<%= form_with url: '/hikes', local: true, do |form|  %>

  <%= form.label :name %>
  <%= form.text_field :name %>

  <%= form.label :hike_distance%>
  <%= form.text_field :hike_distance %>

  <%= form.label :difficulty%>
  <%= form.text_field :difficulty %>

  <%= form.submit 'Add Hike'%>

<% end %>
```
## Create
  ### Controller
  ```ruby
def create
    @hike = Hike.create(name: params[:name], hike_distance: params[:hike_distance], difficulty: params[:difficulty])
    if @hike.valid?
      redirect_to hikes_path
    else
      redirect_to new_hike_path
    end
  end
```
  ### Routes
`post 'hikes' => 'hike#create'`
  ### Views
  N/A

