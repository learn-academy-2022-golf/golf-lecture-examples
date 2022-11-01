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