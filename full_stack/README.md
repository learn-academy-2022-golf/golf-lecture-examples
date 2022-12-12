# Full Stack Rails 12/9/22 

## App set up
  $  rails new full_stack -d postgresql -T 
  $  cd full_stack/
  $  rails db:create
  $  rails db:drop
  $  rails db:create
  $  rails g controller Hike 
  $  rails g model Hike name:string distance:float difficulty:integer
  $  rails db:migrate

# Populate DB
  > Hike.create name:"Torrey Pines", distance:3, difficulty:2
  > Hike.create name:"Flat Rock", distance:5, difficulty:3
  > Hike.create name:"Ho chi mihn - Blacks Beach", distance:1, difficulty:3

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
  <h2> Name of the hike is <%= @hike.name %> </h2>

  <h3> The length of the hike is <%= @hike.hike_distance %> miles</h3>

  <h3> Out of 5 the difficulty rating is <%= @hike.difficulty %></h3>

  <%= link_to 'Back to all hikes', hikes_path %>
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

  <%= form.label :distance%>
  <%= form.text_field :distance %>

  <%= form.label :difficulty%>
  <%= form.text_field :difficulty %>

  <%= form.submit 'Add Hike'%>

<% end %>
```
## Create
  ### Controller
  ```ruby
def create
    @hike = Hike.create(name: params[:name], distance: params[:distance], difficulty: params[:difficulty])
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

## Private 
- Private is a keyword in Ruby that restricts the scope of where a method can be called. Since strong params are only meant to be used as arguments to controller methods, we can list them as private to the controller class. That way there is no chance they can be called from somewhere else in the program.
 ```ruby
  class HikeController <
    # Public facing code goes here
  private
    # Hidden private code goes here
  end
```


## Strong Params 
- Strong params have two methods: require and permit. The require method does exactly what you think in requiring the attributes passed in to be present in the create or update methods. The permit method allows certain items to be present but if they are not present, that is still okay. But attributes that are not listed in the strong params will not be allowed to proceed.

```ruby 
private

  def exercise_params
    params.require(:exercise).permit(:activity, :description)
  end

```

## Refactor

#### Controller
```ruby
def new
  @hike = Hike.new
end
```
#### View
new.html.erb
```ruby
<h3>Add a new Hike</h3>

<%= form_with model: @hike do |form|  %>

 <%= form.label :name %>
  <%= form.text_field :name %>

  <%= form.label :distance%>
  <%= form.text_field :distance %>

  <%= form.label :difficulty%>
  <%= form.text_field :difficulty %>
<br>
  <%= form.submit 'Add Hike'%>

<% end %>
```

# CRUD Action Update
## Edit Method
  ### Controller
```ruby
 def edit
  @hike = Hike.find(params[:id])
 end
``` 

  ### Route
  `get 'hikes/edit' => 'hike#edit', as: edit_hike `
  ### View
  ```ruby
<h3>Add a new Hike</h3>

<%= form_with model: @hike, method: :patch do |form|  %>

  <%= form.label :name %>
  <%= form.text_field :name %>
  <br>
  <%= form.label :hike_distance%>
  <%= form.text_field :hike_distance %>
 <br>
  <%= form.label :difficulty%>
  <%= form.text_field :difficulty %>
<br>
  <%= form.submit 'Edit Hike'%>

<% end %>
```
## Update Method
  ### Controller
  ```ruby
  def update
    @hike = Hike.find(params[:id])
    @hike.update(hike_params)
  end
```

  ### Route
  `patch 'hikes/:id' => 'hike#update' `
  ### View
  N/A


# CRUD Action Delete

  ### Controller
  ```ruby
  def destroy
  
  end
```
  ### Route
  ` delete 'hikes/:id' => 'hike#destroy' `
  ### View
  <%= link_to 'Delete Hike', delete_hike_path(@hike), data: { turbo_method: :delete, turbo_confirm: 'Are you sure you want to delete this hike?'} %>


