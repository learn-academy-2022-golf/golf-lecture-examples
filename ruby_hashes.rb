# Ruby Hashes 11/18/22

# Hashes as specific kind of Ruby Object
  # The are collections of key:value pairs
  # Key is always the data type of a SYMBOL
  # Value is any kind of data ruby recognizes
  # Access the value by referencing the key

# Hash syntax can be 
  # using curly braces being assigned to a variable
  # Curly brackets with hash rockets and symbols


# instructor_team = {lead: 'Austin', assoc: 'Elyse', assistant: 'Nicole'}

# p instructor_team
# {:lead=>"Austin", :assoc=>"Elyse", :assistant=>"Nicole"}

#   # Keys are symbols :symbol
#   # hash rocket to map a key onto a value
#   # Any ruby data type can be the value


# weekly_birthday_crew = {:first=>'Kent', :second=>'Ramirez',:third=>'Matt'}
# p weekly_birthday_crew
# # different ways to access data inside of the hash
# p weekly_birthday_crew[:first]
#   # "Kent"
# p weekly_birthday_crew[0]
#   # nil
# puts weekly_birthday_crew.first
#   # first
#   # Kent

#   # We can call on the class of hash to create hashes easily
# my_hash = Hash.new
# p my_hash
# # {}

# CRUD
  learn_crew = Hash.new
  p learn_crew
  # {}

# Create - creating new instances of data

  learn_crew[:boss_lady] = 'Chelsea'
  learn_crew[:admissions] = 'Kumba'
  learn_crew[:instructor] = 'Austin'
  # {:boss_lady=>"Chelsea", :admissions=>"Kumba", :instructor=>"Austin"}

# Read - Looking at or utelizing the data that has been created
  p learn_crew

# Update - reference a previously created data set and change its values
  learn_crew[:boss_lady] = 'Chelsea K'
  p learn_crew
  # {:boss_lady=>"Chelsea K", :admissions=>"Kumba", :instructor=>"Austin"}
# Delete - removing content from our hash or data set
  learn_crew.delete(:instructor)
  p learn_crew
  # {:boss_lady=>"Chelsea K", :admissions=>"Kumba"}


movie_hash = {:action_comedy=>['Hot Fuzz', 'Hot Shots'], :action_drama=>'Twilight' }

# fuzz = movie_hash[:action_comedy][0]

movie_hash[:action_comedy].delete_at(0)
p movie_hash

# Duck Typing
  # Ennumerables 
    # things that are iterable
  # Range
  # Array
  # Hash

learn_crew.each do |key, value|
  p "#{value}'s job is #{key}"
end

def my_coworkers hash
  hash.map do |key, value|
    "My coworker is #{value}"
  end
end

p my_coworkers learn_crew

# What is a hash? 
  # Collection of key value pairs where the key is a symbol and value is any data type
  # Instance of the class of Hash
#  How to do access a value from a hash
  # square brackets 
# Symbol syntax in ruby
  #  :symbol
# What is duck typing
  # if it walks, talks, flys like a duck its part of a module ex. Enumerables 