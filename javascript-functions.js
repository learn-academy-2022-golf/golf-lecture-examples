// JavaScript Functions

// Reusable block of code
// Will always return an output


// _____________________

// Process:
  // Declaring a variable - const
  // Arrow Syntax (function expression)
      // () - funnel that we can pass data through
      // => - Es6 arrow is the replacement for the keyword function
      // {} - represents the area to write our JavaScript code
        // return - every function must have a return

// const myFunction = () => {
//   return this code block
// }

// To invoke the function: myFunction()


// const makeCoffee = () => {
//   return "Coffee is made!"
// }

// console.log(makeCoffee())
// console.log(makeCoffee())



// _________________________
// Parameters and Arguments

// Functions can take inputs

                    // Parameter                       
// const makeCoffee = (coffeeType) => {
//   return `Enjoy your ${coffeeType}`
// }

// console.log(makeCoffee())

//                         // Argument
// console.log(makeCoffee("Shaken espresso with ice"))
// console.log(makeCoffee("Chai latte"))
// console.log(makeCoffee("Orange Mocha Frap"))


//_____________________________
// Pseudocode
  // Writing process notes in plain English

  // Establish inputs
  // Establish outputs

  // Prompt: Write a function that takes a coffeeType and a size and return a statement with the appropriate price

  // Create a function called makeCoffee
  // Input: coffeeType and size
  // Output: A string that says "Your size coffee is $"
  // Use a conditional to make an evaluation on the size
    // if the size evaluates to large, it will cost $6
    // if the size evaluates to medium, it will cost $4.50
    // if the size evaluates to small, it will cost $3.75
    // else if none of the above is true, we will return an error

const makeCoffee = (coffeeType, size) => {
  if(size === "large") {
    return `Your ${size} ${coffeeType} is $6.`
  } else if(size === "medium") {
    return `Your ${size} ${coffeeType} is $4.50.`
  } else if(size === "small") {
    return `Your ${size} ${coffeeType} is $3.75.`
  } else {
    return "Sorry that is not on the menu"
  }
}

console.log(makeCoffee("Shaken espresso with ice", "large"))
console.log(makeCoffee("Chai Latte", "medium"))
console.log(makeCoffee("Orange Mocha Frap", "small"))
console.log(makeCoffee("small", "Orange Mocha Frap"))
console.log(makeCoffee("Cold Brew", "venti"))