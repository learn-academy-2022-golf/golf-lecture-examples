#  Ruby RSPEC 11/22/22

class Car
  attr_accessor :make
  attr_reader :color, :speed
  # def make=parameter
  #   @make = parameter
  # end
  # def make
  #   @make
  # end
  def initialize color_param='Unpainted'
    @color = color_param
    @speed = 0
  end
  def accelerate number_param
    @speed += number_param
  end
  def decelerate number_param
    if @speed <= number_param
      @speed = 0
    else
      @speed -= number_param
    end
  end
end