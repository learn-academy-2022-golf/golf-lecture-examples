# Ruby Introduction

Yukihiro Matsumoto - Matz


MINASWAN - Matz is nice and so we are nice.

# Ruby Overview 
- Initial Release - Dec, 21st 1995 
- Ruby current version is 3.1.0
- Dynamic - dynamically typed, any variable can use any data type
- Interpreted - code read is read line by line and is turned into machine code by another program 
- Open source - you can access ruby on github, download it and change it/ even submit a PR
- Scripting language - handles logical operations and deals with inputs and outputs
- Object-oriented - EVERYTHING is an object, all objects are instances of classes
- Ruby DOES NOT support Type Coercion 

# Ruby commands 
 use `$ ruby -v` to determine your current ruby version
 - $ irb - interactive ruby is a console "sandbox" for working with ruby code
  - to exit irb type "exit"

## Ruby Data Types
  - Integer
    - Only whole numbers
  - Float
    - require using a decimal in operations to activate
  - String - use single quotes when you can, it looks nice
  - Boolean 
    - Equality - no type coercion so only strict equality
      ==
    - relational operators
    - negation, the NOT operator
    - logical operators, AND / OR
      &&    ||
  - Nil
  - Symbol - unique identifier for a key value pair 

## Ruby Variables 
  1. variable name
  2. the assignment operator
  3. the data
    - no variable declaration needed
    - re-assignable 
    - snake_case
    - String Interpolation - "#{}" -> "#"

## Ruby Methods
  - Most Ruby methods are Accessors
    - very few are mutators
    - You can make almost anything a mutator with the ! at the end of the method
  - No parentheses required (usually)
  - utilize DOT notation 
    - The are all type specific
  - Arguments are passed after the method with a space OR parentheses but never both
  - methods with ? at the end always return true or false
  - anything that starts with Uppercase is a Class
  



 ## Ruby code 
 ```ruby
  :001 > 3 + 3
 => 6 
  :001 > 4 - 2
 => 2 
  :002 > 9 * 21
 => 189 
  :003 > 7 / 3
 => 2 
  :004 > 33** 2
 => 1089 
  :005 > 8 % 2
 => 0 
 :006 > 7.0 / 3
 => 2.3333333333333335 
 :009 > 'hello'
 => "hello" 
  :010 > "Hey y'all"
 => "Hey y'all" 
  :011 > 'Gandalf yelled "Fly you fools"'
 => "Gandalf yelled \"Fly you fools\""
 :012 > true
 => true 
 :013 > false
 => false 
 :014 > true == true
 => true 
 :015 > true == false
 => false 
 :016 > true == 1
 => false 
 :017 > true == 'true'
 => false 
 :018 > 5 > 5
 => false 
 :019 > 6 > 5
 => true 
 :020 > 4 < 5
 => true 
:021 > 3 != 4
 => true 
 :022 > 4 != 4
 => false 
 :023 > 'four' != 4
 => true 
  :024 > '4' != 4
 => true 
  :025 > 4 == 4 && 1 == 1
 => true 
  :026 > 4 == 4 && 1 == 2
 => false 
  :027 > 10 == 5 + 5 && 'hi golf'
 => "hi golf" 
 :028 > 10 == 5 + 5 && 'hi golf' == "hi golf" 
 => true 
 :029 > 2 > 1 || 15 > 1500
 => true 
  :030 > nil
 => nil 
 :031 > nil == nil
 => true 
 :032 > nil == 0
 => false 
 :033 > nil == ''
 => false 
 :034 > nil == []
 => false 
 :036 > name = 'Austin'
 => "Austin" 
 :037 > my_number = 13
 => 13 
 :038 > favorite_movie_of_golf = "GREEN MILE"
 => "GREEN MILE" 
 :040 > cohort = 'Golf'
 => "Golf" 
 :041 > "hey there #{cohort}"
 => "hey there Golf" 
  :043 > cohort.length
 => 4 
 :044 > cohort.upcase
 => "GOLF" 
  :045 > cohort.captialize
(irb):45:in `<main>': undefined method `captialize' for "Golf":String (NoMethodError)                                     
Did you mean?  capitalize                      
               capitalize!                     
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/gems/irb-1.4.2/exe/irb:11:in `<top (required)>'                     
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'            
```
 ```ruby                                  
 :046 > cohort.capitalize
 => "Golf" 
 :046 > cohort.capitalize
 => "Golf" 
 :047 > cohort.reverse
 => "floG" 
 :048 > cohort * 3
 => "GolfGolfGolf" 
 :049 > cohort
 => "Golf" 
 :050 > cohort.reverse!
 => "floG" 
 :051 > cohort
 => "floG" 
  :054 > favorite_movie_of_golf.delete 'E'
 => "GRN MIL" 
  :054 > favorite_movie_of_golf.delete 'E'
 => "GRN MIL" 
 :055 > favorite_movie_of_golf.delete'E'
 => "GRN MIL" 
 :056 > favorite_movie_of_golf.delete('E')
 => "GRN MIL" 
  :057 > favorite_movie_of_golf.include('G')
(irb):57:in `<main>': undefined method `include' for "GREEN MILE":String (NoMethodError)                                                         
Did you mean?  include?                                               
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/gems/irb-1.4.2/exe/irb:11:in `<top (required)>'                                            
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'    
```
```ruby
 :058 > favorite_movie_of_golf.include?('G')
 => true 
  :061 > favorite_movie_of_golf.include? 'Z' || 'G'
 => false 
 :067 > 'Austin'.class
 => String 
  :068 > 400.class
 => Integer 
  :069 > 400.class.class
 => Class 
 :070 > false.class
 => FalseClass 
 :071 > true.class
 => TrueClass 
 :072 > TrueClass.class
 => Class 
 :073 > nil.class
 => NilClass 
 :074 > Class.class
 => Class 
  :076 > '3' + 3.to_s
 => "33" 
  :078 > '3'.to_i + 3
 => 6 
  :079 > 'hello'.to_i
 => 0 
 :080 > 0.to_s
 => "0" 
  :083 > movie_array = ["LOTR", "Green Mile", "Hot Fuzz"] 
 => ["LOTR", "Green Mile", "Hot Fuzz"] 
 :084 > movie_array.last
 => "Hot Fuzz" 
 :085 > movie_array.first
 => "LOTR" 
 :087 > movie_array.reverse
 => ["Hot Fuzz", "Green Mile", "LOTR"] 
 :088 > movie_array
 => ["LOTR", "Green Mile", "Hot Fuzz"] 
  :089 > movie_array.reverse!
 => ["Hot Fuzz", "Green Mile", "LOTR"] 
 :090 > movie_array
 => ["Hot Fuzz", "Green Mile", "LOTR"]
  :091 > movie_array[1]
 => "Green Mile" 
 :092 > movie_array[1] = 123456789
 => 123456789 
 :093 > movie_array
 => ["Hot Fuzz", 123456789, "LOTR"] 
  :094 > movie_array << "green mile"
 => ["Hot Fuzz", 123456789, "LOTR", "green mile"] 
  :095 > movie_array << "matrix"
 => ["Hot Fuzz", 123456789, "LOTR", "green mile", "matrix"] 