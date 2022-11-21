#  Ruby Class Inheritance and OOP

#  OOP
#  - everything in ruby is an object
#  - Everything in ruby belongs to a class 
#  - A method is a function that belongs to an Object
# 3.0.0 :003 > "hello".class
#  => String 
# 3.0.0 :004 > "hello".class.class
#  => Class 
# 3.0.0 :005 > 12.class
#  => Integer 
# 3.0.0 :006 > 12.class.class
#  => Class 
#  - Everything in Ruby inherits from the proto-class " Class"

# OOP follows the Platonic philosophy of the "realm of ideals / forms"

  #  Four Pillars of OOP
    # - Encapsulation - make sections of your code inaccessible to other sections of your code. 
    # - Polymorphism - Data can be held/ expressed in different ways while still being the same concept 
    # - Abstraction - simplifying implentation and interaction by utelizing code  
    # - Inheritance the ability for one object/class to aquire all of the properties of another object/class

      # Musical Instruments - ONLY properties that all instruments share
    # /                   \
#   Winds              Strings
# unique props         /       \
#                   Guitar     Nyckleharpa




class MusicalInstrument
  def initialize company_param_ends_here, material_param, size_param
    @company = company_param_ends_here
    @tuned = true
    @material = material_param
    @age = Time.now
    @size = size_param
  end
end

obo = MusicalInstrument.new "Obo Hut", "Timber", "BIG"

p obo
#<MusicalInstruments:0x00007fa1db8a3cc8> - w/o instance variables
#<MusicalInstruments:0x00007f9ac58d9160 @company="Obo Hut", @tuned=true, @material="Timber", @age=2022-11-21 13:43:49.401998 -0800, @size="BIG">

class WindInstrument < MusicalInstrument
  # the "<" symbol is used to dentoe the child and parent relationship between classes.
  def initialize company_param_starts_here, material_param, size_param, x
    # Super is a key word in ruby that calls upon the Parents Classes Initialize method
    super company_param_starts_here, material_param, size_param
    @mouth_piece = x
  end
  def make_wind_noise
    "toooot"
  end
end

kazoo = WindInstrument.new("Yamaha", "Plastic", "small", "Reed")

p kazoo
#<WindInstruments:0x00007fa9e19183f8 @company="Yamaha", @tuned=true, @material="Plastic", @age=2022-11-21 13:54:48.144487 -0800, @size="small", @mouth_piece="Reed">
p kazoo.make_wind_noise
# "toooot"

class StringInstrument < MusicalInstrument
  # the "<" symbol is used to dentoe the child and parent relationship between classes.
  def initialize com, mat, size, num=6 # parameter="default" is a default setting for any last parameter(s) in any method.
    
    # Super is a key word in ruby that calls upon the Parents Classes Initialize method
    super com, mat, size
    @number_of_strings = num
  end
  def strum_the_strings
    start = 0
    strings = ["a","b","c", "d", "e", "f", "g"]
    while start < @number_of_strings
      p "the #{@company} instrument plays the string #{strings[start]}"
      start += 1
    end
  end
end

p uke = StringInstrument.new("Toyo classics", "bamboo", "smallish", 4)

uke.strum_the_strings