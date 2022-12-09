# RESTful Routes
  
  - Representational State Transfer 
  - Knowledge and expectations 
  - Defines how we:
   - bring in data from users,
   - saving data,
   - How we allow that data to be accessed 
    
  C - Creating, Saving data into a database
  R - Either something to display or just some data, Displaying everything we have access to, or only one thing, 
  U - Transforms the data that we already have
  D - Delete is removing something from our database 

  # HTTP Verbs

  Get - Retrieves data
  Post - Sends data to be loaded into a database 
  Put - Overrides a previous instance in the database
  Patch - Updates one or more keys in an instance of the database 
  Delete - Data / instance is to be removed from the database 


  # RESTful Routes
Read -> Get -> 
> Index  : To send back the ENTIRE list/ all instances of data available for the model being queried  
> Show   : Sends back only ONE instance of the Model being queried

Create -> Get -> 
> New    : Sends over and HTML Form allows the user to fill out data to send to the database

Create -> Post -> 
> Create : takes data and adds it to the database, creating a new instance in the database 

Update -> Get -> 
> Edit   : Sends over and HTML Form allows the user to fill out data to send to the database that updates an   instance 

Update -> Post, Put -> 
> Update : Overwrites existing instance in the database

Delete -> Delete -> 
> Destroy - Removes an item from the database 


```ruby
 http_verb 'table_name' => 'controller_name#method_name'
 ```


 
