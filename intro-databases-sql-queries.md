# Intro to Databases and SQL

## Classes

```ruby
class Student
  def initialize(name, cohort, year)
    @name = name
    @cohort = cohort
    @year = year
  end
end

blake = Student.new("Blake", "Golf", 2022)
ciani = Student.new("Ciani", "Golf", 2022)
Student.new("Elyse", "Alpha", 2021)
```


# Databases
- Place to store data

Model is the class or structure of the data

PRIMARY KEY - is a unique identifier

# SQL
General purpose programming languages - Javascript, Ruby
Domain specific languages - HTML, RSPEC, Postgres

Postgres:
  - Domain specific language who's job is to talk to databases
  - Open source object relational database management system
  - Object oriented

  Check psql version: $ psql --version
    - Should be somewhere in version 14
  $ psql
  $ \l
    - See all databases
  $ q
  $ exit


# PGAdmin
Open PGAdmin
Click side menu until we get to countries
Tool >> Query tool

- Get all entries from database:
SELECT *
FROM country


- Selecting specific columns and limiting results to 10
SELECT name, continent, region
FROM country
LIMIT 10


SELECT name, continent, region
FROM country
WHERE continent = 'North America'


SELECT name, continent, region
FROM country
WHERE continent != 'North America'


SELECT name, continent, population
FROM country
WHERE population > 1e6


SELECT name, continent, population
FROM country
WHERE population > 1e6
AND continent = 'North America'


% is a wildcard that allows any characters prior to be used

SELECT name, continent, population
FROM country
WHERE continent LIKE '%America'


SELECT name, continent, population
FROM country
WHERE continent LIKE '%America'
LIMIT 15


ORDER BY default is least to greatest

SELECT name, region, indepyear
FROM country
ORDER BY indepyear



SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10


SELECT name, surfacearea, population,
population / surfacearea AS population_density
FROM country
WHERE population != 0


SELECT name, surfacearea, population,
population / surfacearea AS population_density
FROM country
WHERE population != 0
ORDER BY population_density DESC