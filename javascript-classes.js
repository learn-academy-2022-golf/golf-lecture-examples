// JavaScript Classes 11/3/22

// Classes are blueprints for objects
  // recipes 
  // plans
  // specifications 

  // NOT THE ACTUAL OBJECT JUST THE PLANS TO MAKE IT
  // how we automate creating objects


// In Javascript (technically) 'class' is a particular kind of function
  // the arguments of class are its properties and methods
  // we  define a classes properties and methods before we instantiate the class

// A class in JS is created by the word 'class'
  // the class key word takes an argument of the class Name in PascalCase
    // PascalCase starts with a capital letter and each new word is given a capital letter
  // after the class name we immediately define the scope by opening up curly brackets 
  // EVERYTHING that will belong to our class goes in these curly brackets 

// class SuperHero {

// }

// Inside of the class we can call on a method for defining the basic properties of our class 
  // constructor 
  // predefined method in javascript that build classes data dynamically 

// basic properties of the class go inside of the constructor
// all keys in a class must be defined with the "this" keyword

// class SuperHero {
//   constructor(){
//     this.name
//     this.origin
//   }
// }

// Properties in a class can be assigned using the assignment operator 
// to dynamically pass in data, we must define parameters in the constructors parens () and call on those parameters. Order DOES NOT matter here, consistency with names does.

// class SuperHero {
//   constructor(heroName, heroOrigin) {
//     this.name = heroName
//     this.origin = heroOrigin
//     this.alive = true
//   }
// }

// To instantiate our class into a unique object we we call on the "new" keyword and the class name

// console.log(new SuperHero)
//  -> SuperHero { name: undefined, origin: undefined, alive: true }

// Spiderman
// define a new variable to save the object
// pass arguments to the class name
  // ORDER HERE MATTERS

// var spidey = new SuperHero("Spider-man", "Got bit by a spider and now he's really strong")

// console.log(spidey);

// var garrett = new SuperHero("Goku", "alien plant sent to earth to wipe out all life, pretty decent guy")

// console.log(garrett)


// classes can also do actions 
  // classes have methods! They are functions that belong to the class
class SuperHero {
  constructor(heroName, heroOrigin) {
    this.name = heroName
    this.origin = heroOrigin
    this.alive = true
  }
  storyTime(){
    return `${this.name} is a superhero who ${this.origin}`
  }
  lostABadFight(){
    this.alive = false
  }
}

var ab = new SuperHero("Captain America", "did some government sanctioned drugs, now punches people, takes long cold showers")

// console.log(ab.storyTime)
// -> [Function: storyTime]
// console.log(ab.storyTime())
// -> Captain America is a superhero who Did some government sanctioned drugs, now punches people, takes long cold showers

var spidey = new SuperHero("Spider-man", "Got bit by a spider and now he's really strong")

console.log(spidey)
console.log(spidey.lostABadFight())
console.log(spidey)



// What is a class?
  // a template for making objects
// What is a method?
  // a function inside of an object / class
// Whats the keyword creating a new class?
  // class
// Whats the keyword for creating a new instance / object
  // new
// Whats the casing convention for classes?
  // PascalCase
// Whats th method for taking in data dynamically?
  // constructor
