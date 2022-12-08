class HomeController < ApplicationController
  def food
    # save parameter from url to an instance variable
    @my_food = params[:fav_food]
  end

  def order
    @food_order_quantity = params[:number].to_i
    @food_item = params[:item]
    if @food_order_quantity > 100
      @quantity = 'a ton of'
    else
      @quantity = @food_order_quantity
    end
  end
end
