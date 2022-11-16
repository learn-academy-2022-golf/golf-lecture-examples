# Ruby Methods and Conditionals

# def - short for define will define a method
# Every 'def' needs a corresponding 'end'
# Methods will be named in snake_case

def greeter
  'Hello World!'
end

p greeter
puts greeter

# Implicit return - last line of code is returned

def greeter name
  #          ^ parameter
  "Hello #{name}!"
end

p greeter "Nicole"
p greeter "Tabi"
p greeter "Shannon"
p greeter "Ramirez"
#           ^ argument


#____________________
# Multiple Arguments


# Ruby accepts multiple arguments without parenthesis, but best practice will provide parenthesis

# def multiply num1, num2
#   num1 * num2
# end

# p multiply 17, 55

def multiply(num1, num2)
  num1 * num2
end

p multiply(17, 55)


#____________________
# Methods with Conditional Logic

# Every 'def' needs an 'end'
# Every 'if' needs an 'end'
# Two different ends means two different execution layers of code

def greater_num(num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else
    "#{num1} and #{num2} are equal"
  end
end

p greater_num(27, 22)
p greater_num(5, 10)
p greater_num(7, 7)
p greater_num(3.2, 5)


#____________________

# gets is a method that will stop the execution of the program and wait for you to type something and hit enter

# user_name = gets
# p user_name -> "Elyse\n"

# .chomp - removes the extra line break character /n
puts 'Please Enter Your Name'
user_name = gets.chomp
p user_name # -> "Elyse"

puts 'Please Enter Your Age'
user_age = gets.chomp.to_i
p user_age


def can_you_vote(name, age)
  if age >= 18
    "Hi #{name}. #{age} is old enough to vote"
  else
    "Hi #{name}. #{age} is not old enough to vote"
  end
end

p can_you_vote("Elyse", 37)
p can_you_vote(user_name, user_age)


# endwise is a great VS code extension that will automatically end methods, and conditionals