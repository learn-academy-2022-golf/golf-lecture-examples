# Ruby Classes and objects 11/21/2022

# object - instance of a class

# classes are always in PascalCase

# class Netflix
# end

# p Netflix.new
# p Netflix.new
# p Netflix.new
# p Netflix.new
# creating an new instance of the class with the method .new
#<Netflix:0x0000000157869d60> --> object
# each object has a unique id

# class needs something to do - getting and setting

# setting data
# class Netflix
#   def set_show_data(title)
      # instance variable - variable that belongs to the class - @
#     @title = title
#   end
# end

# setting with mulitple parameters
# class Netflix
#   def set_show_data(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
# end

# wrong number of arguments (given 1, expected 2) (ArgumentError) - if you pass in the wrong number of arguments in the setter method

# super_natural = Netflix.new
# p super_natural.set_show_data('Super Natural', '1 hour')
# "Super Natural"
# p super_natural
#<Netflix:0x0000000120057348 @title="Super Natural">

# love_is_blind = Netflix.new
# love_is_blind.set_show_data('Love Is Blind', '1 hour')
# p love_is_blind
#<Netflix:0x000000014791ad28 @title="Love Is Blind", @run_time="1 hour", @watched=false>


# Getting data
# class Netflix
#   # setter method
#   def set_show_data(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   # getter method
#   def get_title
#     @title
#   end
#   # getter method
#   def get_show_data
#     "The show #{@title} is #{@run_time} long."
#   end
# end

# super_natural = Netflix.new
# super_natural.set_show_data('Super Natural', '1 hour')
# p super_natural.get_title
# "Super Natural"
# p super_natural.get_show_data
# "The show Super Natural is 1 hour long."

# love_is_blind = Netflix.new
# love_is_blind.set_show_data('Love Is Blind', '1 hour')
# p love_is_blind.get_title
# "Love Is Blind"
# p love_is_blind.get_show_data
# "The show Love Is Blind is 1 hour long."


# Initialize
# class Netflix
#   # setter method
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   # getter method
#   def get_title
#     @title
#   end
#   # getter method
#   def get_show_data
#     "The show #{@title} is #{@run_time} long."
#   end
# end
#
# super_natural = Netflix.new('Super Natural', '1 hour')
# # p super_natural #<Netflix:0x00000001558d17f0>
# # p super_natural.get_title
# # nil
# p super_natural
# p super_natural.get_title
# p super_natural.get_show_data
#
# # changed the set_show_data to initialize - initialize is recognized by Ruby and will run when .new is called
# love_is_blind = Netflix.new('Love Is Blind', '1 hour')
# p love_is_blind
# p love_is_blind.get_title
# p love_is_blind.get_show_data

# Setter method for watched and used the value to produce a unique outcome in get_show_data
# class Netflix
#   # setter method
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   # getter method
#   def get_title
#     @title
#   end
#   # getter method
#   def get_show_data
#     if @watched
#       "You have watched the show #{@title} is #{@run_time} long."
#     else
#       "You have not watched the show #{@title} is #{@run_time} long."
#     end
#   end
#   def watched_it
#     @watched = true
#   end
# end
#
# super_natural = Netflix.new('Super Natural', '1 hour')
# # p super_natural
# # p super_natural.get_title
# p super_natural.get_show_data
# super_natural.watched_it
# p super_natural.get_show_data
#
# love_is_blind = Netflix.new('Love Is Blind', '1 hour')
# p love_is_blind
# p love_is_blind.get_title
# p love_is_blind.get_show_data


class Netflix
  # a Ruby method that takes a symbol of an instance variable creates getter and setter methods
  attr_accessor :title, :run_time, :watched
  # setter method
  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @watched = false
  end
  # getter method
  def get_show_data
    if @watched
      "You have watched the show #{@title} is #{@run_time} long."
    else
      "You have not watched the show #{@title} is #{@run_time} long."
    end
  end
end

super_natural = Netflix.new('Super Natural', '1 hour')
# p super_natural
p super_natural.title
p super_natural.run_time
p super_natural.watched # getter
p super_natural.get_show_data
super_natural.watched = true # setter
p super_natural.get_show_data

love_is_blind = Netflix.new('Love Is Blind', '1 hour')
