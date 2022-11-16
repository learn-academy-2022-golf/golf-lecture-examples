# Ruby Blocks and Iterables 11/16/22

# While 
  # make a while loop that prints out the numbers 1 - 10
# num = 1

# while num <= 10
#   p num
#   # num = num + 1
#   num += 1
# end

# nums_array = []
# num = 0

# while num < 10
#   nums_array << num += 1
#   # num += 1
# end
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# p nums_array

def array_maker num1, num2

  nums_array = []

  while num1 < num2
    nums_array << num1 += 1
    # num += 1
  end

  nums_array
end

# p array_maker(1, 10)
# p array_maker(1, 100)



# Data Type - Ranges
  # ranges of numbers
    range_nums = 1..99
    # p range_nums
    # range_nums.each do |value|
    #   p "Hey Golf this is number #{value}"
    # end

  # ranges of letters
  # range_letters = 'A'..'z'
  # p range_letters
  # range_letters.each do |letter|
  #   p letter
  # end
# Blocks
  # anonymous functions that are given to methods to modify their behavior
  #  can be definded by 
    #  do  end
    #  {     }
      # curly brackets must be used on a single line
  
  # Each
    # will preform instructions for EACH item in the array
    # nums_array = [9, 27, 17, 55, 42]
    
    # nums_array.each do
    #   p 'Hey Golf'
    # end

    # nums_array.each do |value| 
    #   p value * 3
    # end

  # Map
    # collects all of the returns and stores them inside of an array
    # returns an array the SAME LENGTH of the items it itterates over
  # nums_array = [9, 27, 17, 55, 42]

  # mod_3_array = nums_array.map do |number|
  #   number % 3
  # end

  # p 'Mod 3 array is below this'
  # p mod_3_array

  def show_odds nums
    nums.map do |number|
      # if number % 2 == 0
      #   "#{number} is an even number, so we don't want it"
      # else
      #   number
      # end
      if number % 2 != 0
        number
      end
    end
  end

#  p show_odds 1..45
 

# Select 
  # very similar to filter
  # Has a built in if/else
  # Looks for a Boolean value to return items that are in tha array
  # tries to return an array shorter than the orignial input


 def show_odds nums
    nums.select do |number|
      number % 2 != 0
    end
  end

#  p show_odds 1..45


# Search bar
user_names = ['ostinslife', 'hahajk', 'canolidude', 'sceneKid23']

 def search_bar array, letter
  array.select.with_index do |name, index|
    included = name.include? letter 
    included && index < 2
  end
 end

# p search_bar(user_names, 'p')
p search_bar user_names, 'h'
# p search_bar(user_names, '3')

# Review

#  While Loops not for loops
#  map, select, and each need BLOCKS
#  Blocks come in two flavors
#    do end
#    {   }
#  When blocks need to acces information we pass to them pipes, with parameters like value, index, and array
#  
