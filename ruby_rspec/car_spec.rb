require 'rspec'
require_relative 'car'
#  Ruby RSPEC 11/22/22

# $ mkdir ruby_rspec
# $ touch car.rb
# $ touch car_spec.rb
# $ gem install rspec


# Red Green Refactor
# Write the test to see it fail
# Write the cod ethat makes the test pass
# Reffactor the code to something simplier or more effective while checking it still passes

# Arrange Act Assert
  # Setting up a test enviroment
  # makeing a change in that enviroment
  # Asserting a result on the data or enviroment from the change

# There is a Solid Testing culture for Ruby developers 

# Ruby Rspec testing syntax

# describe 'Class' do
#   it 'behavior' do
#     expect 
#   end
# end

# Describe is what we use at the top level of our tests to declare which class we are testing
describe 'Car' do
  # It statements can be use to test behavior or properties of classes / methods
  it 'when a car is instantiated' do
    # expect takes an argument of either behavior in { } or some value of data. 
    # Rspec matchers can be used to identify process or results
    expect{ Car.new }.to_not raise_error
  end
  it 'has a a make' do
    #  Arrange
    my_car = Car.new
    # Act
    my_car.make = "Porsche"
    # Assert
    expect(my_car.make).to(be_a(String))
    # Assert
    expect(my_car.make).to eq "Porsche"
  end
  # Want my car to be able to have a color, that color should be "unpainted" be default
  it 'can be unpainted by default' do
    # Arrange
    my_car = Car.new
    # Act Assertion
    expect(my_car.color).to be_a String
    expect(my_car.color).to eq 'Unpainted'
  end
  it 'can be painted when instantiated' do
    my_new_subaru = Car.new "Geyser Blue"
    expect(my_new_subaru.color).to be_a String
    expect(my_new_subaru.color).to eq 'Geyser Blue'
  end
  # My car can accelerate and decelerate 
  it 'has a speed' do
    my_car = Car.new
    expect(my_car.speed).to eq 0
    expect(my_car.speed).to be_a Numeric
  end
  it 'can accelerate by an amount' do
    my_car = Car.new
    my_car.accelerate 10
    expect(my_car.speed).to eq 10
  end
  it 'can decelerate by an amount' do
    my_car = Car.new
    my_car.accelerate 50
    expect{ my_car.decelerate 25 }.to change{ my_car.speed }.from(50).to(25)
  end
end
# RED
# Failed examples:

# rspec ./car_spec.rb:26 # Car when a car is instantiated
# Green
# Car
#   when a car is instantiated
# RED
# Green
# Car
#   when a car is instantiated
#   has a a make
#  RED
# rspec ./car_spec.rb:44 # Car can be unpainted by default
# Green 
# Car
#   when a car is instantiated
#   has a a make
#   can be unpainted by default

# Finished in 0.00584 seconds (files took 0.26159 seconds to load)
# 3 examples, 0 failures