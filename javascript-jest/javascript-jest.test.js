// JEST - PART 1

// const { it } = require("node:test")
// const { describe } = require("yargs")

// ^ throws this error:
// ENOENT: no such file or directory, open 'node:test'

// Jest is a Javascript testing framework
  // Collection of files managed by yarn

// Yarn is a package manager for javascript that contains code being shared from other developers


// To install Jest: $ yarn add jest


// node_modules - thousands of folders and files that makeup the framework
// package.json - contains info about dependencies
// yarn.lock - contains current versions of dependencies

// ______________

//  TDD - Test Driven Development

// Red - Green - Refactor
    // 1. Write the test first!
    // 2. Run the test to see it fail (Red)
    // 3. Write the code
    // 4. Run the test to see it pass (Green)
    // 5. Refactor if necessary


// ________________

// Prompt: Create a function called greeter that returns a string that says Hi, Golf 2022!

// Input: none
// Output: "Hi, Golf 2022!"

// Anonymous function:  () => {}

// Describe: method that lists the name of the function
// It: nested within the describe block, that in plain words describes what the function does (copy from prompt!)
// Expect: will invoke the function and compare the result to a predetermined expected output.

describe("greeter", () => {
  it("returns a string that says Hi, Golf 2022!", () => {
    expect(greeter()).toEqual("Hi, Golf 2022!")
  })
})

// greeter() === "Hi, Golf 2022!"

// To run: $ yarn jest
// Good fail - ReferenceError: greeter is not defined

const greeter = () => {
  return "Hi, Golf 2022!"
}


// JEST - PART 2

// Prompt: Create a function that returns "help others" if you do understand or "ask questions" if you do not understand

// Input: "yes"
// Output: "help others"

// Input: "no"
// Output: "ask questions"


// Jest Template:
// describe("functionName", () => {
//   it("describe what functionName does here", () => {
//     expect(functionName("pass arg as needed")).toEqual("expected output")
//   })
// })

describe("doYouUnderstand", () => {
  it("returns 'help others' if you do understand or 'ask questions' if you do not understand", () => {
    expect(doYouUnderstand("yes")).toEqual("help others")
    expect(doYouUnderstand("no")).toEqual("ask questions")
    expect(doYouUnderstand("Yes")).toEqual("help others")
  })
})

// ReferenceError: doYouUnderstand is not defined

// Pseudocode:
// Create a function called doYouUnderstand that takes in a string as an argument
// One parameter: string
// Write a conditional to evaluate if string equals "yes"
  // return "help others"
// Otherwise we need to evaluate if string equals "no"
  // return "ask questions"

const doYouUnderstand = (string) => {
  if(string.toLowerCase() === "yes") {
    return "help others"
  } else if(string.toLowerCase() === "no") {
    return "ask questions"
  } else {
    return "Oops, something went wrong"
  }
}



// Prompt: Create a function that takes in an array and a string and appends the string to the end of the array

// Input: ["take notes", "pay attention", "practice", "take breaks", "drink coffee"], "ask questions"
// Output: ["take notes", "pay attention", "practice", "take breaks", "drink coffee", "ask questions"]

describe("becomeADeveloper", () => {
  it("takes in an array and a string and appends the string to the end of the array", () => {
    let input1 = ["take notes", "pay attention", "practice", "take breaks", "drink coffee"]
    let input2 = "ask questions"
    let expectedOutput = ["take notes", "pay attention", "practice", "take breaks", "drink coffee", "ask questions"]
    expect(becomeADeveloper(input1, input2)).toEqual(expectedOutput)
  })
})

// ReferenceError: becomeADeveloper is not defined

// Pseudocode:
// Create a function called becomeADeveloper that takes in an array and a string as an argument
// Two parameters: array, string
// Use the concat method to add the string into array
// Return result

const becomeADeveloper = (array, string) => {
  return array.concat(string)
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total


// Prompt: Create a function that allows a customer to filter the cost of an item dynamically by selecting a cost range

// Input: [10, 22, 33, 777, 1000, 4.59, 3.5, 499], 0, 100
// Output: [10, 22, 33, 4.59, 3.5]

describe("priceFilter", () => {
  it("allows a customer to filter the cost of an item dynamically by selecting a cost range", () => {
    let prices = [10, 22, 33, 777, 1000, 4.59, 3.5, 499]
    let minPrice = 0
    let maxPrice = 100
    let expectedOutput = [10, 22, 33, 4.59, 3.5]
    expect(priceFilter(prices, minPrice, maxPrice)).toEqual(expectedOutput)
  })
})

// ReferenceError: priceFilter is not defined

// Pseudocode:
// Create a function called priceFilter that takes in an array and two numbers as arguments
// 3 Parameters: array, num1, num2
// Use filter to iterate over array and check if in range of num1 or num2
  // num1 is less than current iteration
  // num2 is greater than current iteration
// return result

const priceFilter = (array, num1, num2) => {
  return array.filter(value => value > num1 && value < num2)
}