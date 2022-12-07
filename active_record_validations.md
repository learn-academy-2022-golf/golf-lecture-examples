# Validations and Model Specs 12/7/22

- Spec - Specifications  
- Rspec
- They test our code
- They communicate how our app functions to other developers.

- Validate the data that is coming into our program

  - Tests for validations should include
    - Proper data should be entered into the data base
    - Improper data should be responded to with an error

# What is a validation

  - A validation is a rails method
    - it takes arguments of symbols that represent properties on our model 
    - The job of a validation is to reject improper data 
      - An error code can be found on the hash being passed back to original request location

```ruby  
   p variable.errors[:relevant_key]
```

# Installing Rspec in rails
  $ bundle add rspec-rails
  $ rails generate rspec:install

  $ rails generate rspec:install
      create  .rspec
      create  spec
      create  spec/spec_helper.rb
      create  spec/rails_helper.rb

  $ rails g model BlogPost author:string content:text simple_date:date
      invoke  active_record
      create    db/migrate/20221207184058_create_blog_posts.rb
      create    app/models/blog_post.rb
      invoke    rspec
      create      spec/models/blog_post_spec.rb
  
  $ rspec spec/models/blog_post_spec.rb 

# TDD
  - Red Green Refactor
    - Red means the test initially fails
    - Green, we make the code that makes the test pass
    - We refactor the code to be more efficient and make sure the test still passes

```ruby
    it 'throws an error if there is no author' do
      blog_post = BlogPost.create author: nil, content: "lorem ipsum", simple_date: Date.today

      p blog_post.errors[:author]

      expect(blog_post.errors[:author]).to_not be_empty
    end
```

# Creating Validations
 -  validates 
  - Takes a dynamic number of arguments
  - the are always symbols
  - the last argument is ALWAYS teh validation you wish to set up
  - the in between arguments are the properties that the validation applies too

  ```ruby
  validates :author, presence: true
  ```