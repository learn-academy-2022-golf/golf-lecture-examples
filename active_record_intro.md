# Active Record 12/5/22

- ORM

  - Object relational Mapping
  - Active Record allows developers to write SQL quieries in Ruby (style) Code
  - allows methods to be called on dtabase instances and have those changes persist in the DB

- Databases
  - Table
    - Cloumns are going to declare which data they hold
    - rows will be the instances of the data
    - The first column is always the Primary Key
      - Active record sets the datatype of the primary key to integers
      - the Id's never go away even if the instance is deleted
  - They can have Multiple Tables
    - tables can have relationships to each other
  - We wil mostly be talking to the tables in order to Create, Read, Update and Delete Data

$ rails db:create

# Generate Commands

Adding a table to the database, going to require two things

1.  is going to be generated with a name and column names
2.  datatypes - specifically Active Record Datatypes

$ rails generate model ...
-> Model Name, Singular and PascalCase
-> column names, singular and snake_case
-> [datatypes](https://michaelsoolee.com/rails-activerecord-data-types/)

$ rails generate model Schedule day:date event:string day_of_the_week:string

# Getting our Rails app created and Active Record running

$ rails new active_record_intro -d postgresql -T
$ cd active_record_intro
$ rails db:create
Created database 'active_record_intro_development'
Created database 'active_record_intro_test'
$ rails generate model Schedule day:date event:string day_of_the_week:string
invoke active_record
create db/migrate/20221205191240_create_schedules.rb
create app/models/schedule.rb
$ rails db:migrate
== 20221205191240 CreateSchedules: migrating ==================================
-- create_table(:schedules)
-> 0.0346s
== 20221205191240 CreateSchedules: migrated (0.0347s) =========================

# Rails Console

- Our Database Table is represented as an ActiveRecord Model and we can use AR commands to interact with the DB Table

$ rails console
or
$ rails c

```ruby
  Loading development environment (Rails 7.0.4)
  3.0.0 :001 >
  3.0.0 :002 > Schedule.all
    Schedule Load (4.6ms)  SELECT "schedules".* FROM "schedules"
  => []
```

## The Model of Schedule which is also a table in the Database can be operated on as a class in the console.

# Create - .create

- creating data in our tables so we can see that data

```ruby
3.0.0 :004 > Schedule.create day:Date.today, event:"Kahoot", day_of_the_week:"Monday"
  TRANSACTION (0.2ms)  BEGIN
  Schedule Create (5.8ms)  INSERT INTO "schedules" ("day", "event", "day_of_the_week", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["day", "2022-12-05"], ["event", "Kahoot"], ["day_of_the_week", "Monday"], ["created_at", "2022-12-05 19:42:29.661031"], ["updated_at", "2022-12-05 19:42:29.661031"]]
  TRANSACTION (0.8ms)  COMMIT
 =>
#<Schedule:0x00007fe4ae0c6f80
 id: 1,
 day: Mon, 05 Dec 2022,
 event: "Kahoot",
 day_of_the_week: "Monday",
 created_at: Mon, 05 Dec 2022 19:42:29.661031000 UTC +00:00,
 updated_at: Mon, 05 Dec 2022 19:42:29.661031000 UTC +00:00>
```

- When we create instance in the database the data type of the instance when returned in ruby is a hash.

# Read

## .all

```ruby
Schedule.all
Schedule Load (1.4ms)  SELECT "schedules".* FROM "schedules"
=>
[#<Schedule:0x00007fe4aa156a80
id: 1,
day: Mon, 05 Dec 2022,
event: "Kahoot",
day_of_the_week: "Monday",
created_at: Mon, 05 Dec 2022 19:42:29.661031000 UTC +00:00,
updated_at: Mon, 05 Dec 2022 19:42:29.661031000 UTC +00:00>,
#<Schedule:0x00007fe4aa156940
id: 2,
day: Thu, 08 Dec 2022,
event: "Whiteboarding",
day_of_the_week: "Thursday",
created_at: Mon, 05 Dec 2022 19:47:04.366627000 UTC +00:00,
updated_at: Mon, 05 Dec 2022 19:47:04.366627000 UTC +00:00>,
#<Schedule:0x00007fe4aa156878
id: 3,
day: Fri, 09 Dec 2022,
event: "Assessment",
day_of_the_week: "Friday",
created_at: Mon, 05 Dec 2022 19:47:54.415149000 UTC +00:00,
updated_at: Mon, 05 Dec 2022 19:47:54.415149000 UTC +00:00>,
#<Schedule:0x00007fe4aa1567b0
id: 4,
day: Wed, 07 Dec 2022,
event: "Oso",
day_of_the_week: "Wednesday",
created_at: Mon, 05 Dec 2022 19:48:37.519903000 UTC +00:00,
updated_at: Mon, 05 Dec 2022 19:48:37.519903000 UTC +00:00>]
```

## .find

- takes an argument of an ID

```ruby
> Schedule.find 3
  Schedule Load (0.5ms)  SELECT "schedules".* FROM "schedules" WHERE "schedules"."id" = $1 LIMIT $2  [["id", 3], ["LIMIT", 1]]
 =>
#<Schedule:0x00007fe4a9f72fc0
 id: 3,
 day: Fri, 09 Dec 2022,
 event: "Assessment",
 day_of_the_week: "Friday",
 created_at: Mon, 05 Dec 2022 19:47:54.415149000 UTC +00:00,
 updated_at: Mon, 05 Dec 2022 19:47:54.415149000 UTC +00:00>
```

## .where

- Takes an argument of a key and a value
- Always returns an array

```ruby
> Schedule.where day_of_the_week:"Wednesday"
  Schedule Load (1.0ms)  SELECT "schedules".* FROM "schedules" WHERE "schedules"."day_of_the_week" = $1  [["day_of_the_week", "Wednesday"]]
 =>
[#<Schedule:0x00007fe4ae952b68
  id: 4,
  day: Wed, 07 Dec 2022,
  event: "Oso",
  day_of_the_week: "Wednesday",
  created_at: Mon, 05 Dec 2022 19:48:37.519903000 UTC +00:00,
  updated_at: Mon, 05 Dec 2022 19:48:37.519903000 UTC +00:00>]
```

## .first

```ruby
Schedule.where(day_of_the_week:"Wednesday").first
Schedule Load (0.8ms) SELECT "schedules"._ FROM "schedules" WHERE "schedules"."day_of_the_week" = $1 ORDER BY "schedules"."id" ASC LIMIT $2 [["day_of_the_week", "Wednesday"], ["LIMIT", 1]]
 =>
#<Schedule:0x00007fe4ae970960
 id: 4,
 day: Wed, 07 Dec 2022,
 event: "Oso",
 day_of_the_week: "Wednesday",
 created_at: Mon, 05 Dec 2022 19:48:37.519903000 UTC +00:00,
 updated_at: Mon, 05 Dec 2022 19:48:37.519903000 UTC +00:00>
3.0.0 :012 > Schedule.first
Schedule Load (0.3ms) SELECT "schedules"._ FROM "schedules" ORDER BY "schedules"."id" ASC LIMIT $1 [["LIMIT", 1]]
=>
#<Schedule:0x00007fe4a9592988
 id: 1,
 day: Mon, 05 Dec 2022,
 event: "Kahoot",
 day_of_the_week: "Monday",
 created_at: Mon, 05 Dec 2022 19:42:29.661031000 UTC +00:00,
 updated_at: Mon, 05 Dec 2022 19:42:29.661031000 UTC +00:00>
3.0.0 :013 >
```

# Update

  - in order to update information in the database we must assign the instance(s) to a ruby variable
  - .update has to be set onto a ruby variable that references the instance in the table
    - pass to the update method the keys and values you want updated

```ruby
> oso = Schedule.find 4
> Schedule Load (1.0ms) SELECT "schedules".\* FROM "schedules" WHERE "schedules"."id" = $1 LIMIT $2 [["id", 4], ["LIMIT", 1]]  
>  =>  
> #<Schedule:0x00007fe278f97330  
> ...  
> 3.0.0 :004 > oso
> =>
> #<Schedule:0x00007fe278f97330  
>  id: 4,  
>  day: Wed, 07 Dec 2022,  
>  event: "Oso",  
>  day_of_the_week: "Wednesday",  
>  created_at: Mon, 05 Dec 2022 19:48:37.519903000 UTC +00:00,  
>  updated_at: Mon, 05 Dec 2022 19:48:37.519903000 UTC +00:00>
3.0.0 :005 > oso.update event:"Oso's Birthday"
  TRANSACTION (0.1ms)  BEGIN
  Schedule Update (9.5ms)  UPDATE "schedules" SET "event" = $1, "updated_at" = $2 WHERE "schedules"."id" = $3  [["event", "Oso's Birthday"], ["updated_at", "2022-12-05 21:35:22.062928"], ["id", 4]]                      
  TRANSACTION (2.4ms)  COMMIT                              
 => true                                                   
3.0.0 :006 > oso
 => 
#<Schedule:0x00007fe278f97330                              
 id: 4,                                                    
 day: Wed, 07 Dec 2022,                                    
 event: "Oso's Birthday",                                  
 day_of_the_week: "Wednesday",                             
 created_at: Mon, 05 Dec 2022 19:48:37.519903000 UTC +00:00,
 updated_at: Mon, 05 Dec 2022 21:35:22.062928000 UTC +00:00> 
```

# Delete
 - .destroy
 - .delete
 - Delete requires a reference variable to be run on
```ruby
3.0.0 :008 > kahoot = Schedule.first
  Schedule Load (0.3ms)  SELECT "schedules".* FROM "schedules" ORDER BY "schedules"."id" ASC LIMIT $1  [["LIMIT", 1]]                                    
 =>                                                                      
#<Schedule:0x00007fe2785c4c40                                            
...                                                                      
3.0.0 :009 > kahoot
 => 
#<Schedule:0x00007fe2785c4c40                                            
 id: 1,                                                                  
 day: Mon, 05 Dec 2022,                                                  
 event: "Kahoot",                                                        
 day_of_the_week: "Monday",                                              
 created_at: Mon, 05 Dec 2022 19:42:29.661031000 UTC +00:00,             
 updated_at: Mon, 05 Dec 2022 19:42:29.661031000 UTC +00:00>             
3.0.0 :010 > kahoot.delete
  Schedule Destroy (2.2ms)  DELETE FROM "schedules" WHERE "schedules"."id" = $1  [["id", 1]]                                                  
 =>                                                           
#<Schedule:0x00007fe2785c4c40                                 
 id: 1,                                                       
 day: Mon, 05 Dec 2022,                                       
 event: "Kahoot",                                             
 day_of_the_week: "Monday",                                   
 created_at: Mon, 05 Dec 2022 19:42:29.661031000 UTC +00:00,  
 updated_at: Mon, 05 Dec 2022 19:42:29.661031000 UTC +00:00> 
 ```