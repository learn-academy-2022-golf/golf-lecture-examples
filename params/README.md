# Params

## Recap of Routes/Views/Controllers
- The controller directs the flow of application
  - collect information from database
  - local variables inside the methods
  - in charge of displaying the view

URL -> Route -> Controller -> View

## Params
URL Parameters - pass additional information through URL to controller

We can setup our controller to dynamically store params passed in url:
```ruby
class HomeController < ApplicationController
  def food
    @my_food = params[:fav_food]
  end
end
```

URL: http://localhost:3000/food?fav_food=ramen
We use a question mark as a type of query, set the symbol to the value we want to display



- Update routes to expect favorite food as a param:

 get '/food/:fav_food' => 'home#food'

 URL: http://localhost:3000/food/ramen

Controller:
params[:number] - looks for the key in the hash below:

Parameters: {"fav_food"=>"ramen"}

# Multiple Params
```ruby
  def order
    @food_order_quantity = params[:number].to_i
    @food_item = params[:item]
    if @food_order_quantity > 100
      @quantity = 'a ton of'
    else
      @quantity = @food_order_quantity
    end
  end
```
Routes: get '/order/:number/:item' => 'home#order'

URL: http://localhost:3000/order/101/steaks