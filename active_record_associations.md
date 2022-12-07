# Active Record Associations 

- What is a DB? What problem does it solve?
  - Storing and organizing a lot of data
    - We can query and retrieve data
    - We can anaylze and anticipate data sets
    - We care about the relationship of data
    - IT MAKES TONS OF MONEY
    - saves tons of time

# Rails Table Associations 

- belongs_to
- has_many
- has_one
- has_may :through
- has_one :through 
- has_and_belongs_to_many

one-to-one
one-to-many
many-to-many

# Setting Up and using the Foreign_key 

- A Foreign key is a direct reference to the primary key of an instance in another Table.
- In rails it is always an integer
- The Models will require that the relationship is defined prior to using the key

$ rails g model Team name:string city:string
$ rails g model Player name:string position:string team_id:integer
                                                      ^      ^

Teams have many players
  has_many :players

Players belong to teams
  belongs_to :team