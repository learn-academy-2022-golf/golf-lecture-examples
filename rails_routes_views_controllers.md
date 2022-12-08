# Rails Routes Views Controllers 12/8/22

1. Views
2. Routes
3. Controllers

# Overview
  - Understand the anatomy of a Rails Route
    - the HTTP verb
    - url
    - the controller being called upon
    - the method being invoked

   - Using the generator command to create a Controller
    - create methods within the controller
```ruby
      def custom_method_name
        # some logic
      end
```
  - Creating View's
    - Linking views to the Controller

# App Set Up
 $ rails new route_view_controller -d postgresql -T
 $ rails db:create
 $ rails generate controller Song
  - Singular 
  - PascalCase
  -   create  app/controllers/song_controller.rb
      invoke  erb
      create    app/views/song
      invoke  helper
      create    app/helpers/song_helper.rb
  
# Controller 
  - Responsible for mapping all external requests to internal actions
  - manage caching 
  - manage sessions, helper modules
  - 
```ruby
  def zeke_song
    render html: "Blue Monday - New Order"
  end
```

# Routes
  - Our Rails applciation can respond to HTTP requests when running a server. 
  - the routes.rb defines what routes we can custom make and our rails application will respond too
    - / how to respond
  
  1. Http verb
  2. custom url
  3. hash rocket
  4. controller_name#
  5. method_name

```ruby
  get 'zeke' => 'song#zeke_song'
#  1   2      3   4     5
```

# Recap 
1.  Made an app
2. created a db
3. generated a controller
4. set up some routes 
5. bounced back and forth a lot 


# View
  - The view is in charge of displaying information to our user
  - Views will be linked to our controller
    - We link the view and the controller by letting rails take care of it using something called "Rails Magic" 
    - As long as we don't tell the method what to render AND there is a view file of the same name in the proper folder, rails will automatically render that view
```ruby
    def zeke_song 
    end
```
  
  - We make views in our views folder
  - file path and naming convention
   `views/controller_name/method_name.html.erb`

  
## ERB - Embedded Ruby
- syntax
- ruby script 
  - <% ruby code goes here %>
- ruby to be displayed 
  - <%= ruby code you want to show up %>
- Controllers can use instance variables and pass the data to the view

## link_to
/views/controller/home.html.erb
```ruby
<%= link_to "Tacos", "/tacos" %>
<%= link_to "Other method", "/other_method" %>
```
/views/food/tacos.html.erb
```ruby
<%= link_to "Home", "/" %> 
```


## Instance Variables in the Controller

```ruby
class ControllerName < OtherThing
    def method_name
        @instance_variable = ["Data","I", "Want", "Later", ]
    end
end
```

## "each do" in HTML ERB
app/views/ControllerName/method_name.html.erb
```ruby
<ul>  
<li>
<% @instance_variable.each do |value|%>
    <li> <%= value %></li>
<% end %>
</ul>
```

# Recap 2
1.  Made an app
2. created a db
3. generated a controller
4. set up some routes 
5. bounced back and forth a lot 
6. made some views
7. rooted on of our routes
8. we linked our controller to our views
  - Rails magic
9. used the erb tags to create links to navigate our website
9. set up instance variables in the controller to display more complex data

