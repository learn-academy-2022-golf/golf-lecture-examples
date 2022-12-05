# Rails Introduction 12/5/22

- Built in Ruby
- Full Stack Application QUICKLY
 - Convention over configuration 
  - DHH (David Heinemeier Hansson)
  - "Look at how many things I am NOT doing."
- MVC Architecture
  - MODEL VIEW CONTROLLER
  - Model 
    - Shaping our Memory / Data; Buisness center of logic and data. Models describe the relationship our databases have to one another and what kind of things we can accept from our users
  - View
    - What the user sees, touches, interacts with, and any logic being handled for the view.
  - Controller 
   - Brains of our application, descion maker, traffic signal, allows us to create, read, update and delete data. (CRUD)


# Creating a rails application 
 $ rails new
 -> name of our app
  - snake_case
  - has to be singular
  - SUPER OPINIONATED 
 -> dropping the preloaded DB
 -> adding in our database of choice
 -> dropping the testing environment 

 $ rails new rails_intro -d postgresql -T

- EVERY rails application needs a database
 Create a database partition
- $ rails db:create 
 Drop the Database
- $ rails db:drop

```ruby
Created database 'rails_intro_development'
Created database 'rails_intro_test'
```

# Run the rails application
$ rails server
or 
$ rails s