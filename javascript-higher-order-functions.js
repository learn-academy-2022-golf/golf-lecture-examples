// JavaScript Higher Order Functions 10/31/22

// built in methods
// console.log("anything")
// console.log(true.toUpperCase())
// -> TypeError: true.toUpperCase is not a function 
  // NOT THE CORRECT DATA TYPE
// console.log("string".toUpperCase())
// -> STRING

// What is a function? 
  // little machine, custom set of code, that always returns us some data. 
    // default is to return undefined
  // don't always need names

  // A nameless function is called and Anonymous Function

// What is a Parameter? 
  //  The placeholder for the data being passed into the function

// What is an Argument? 
  //  The data that actually gets passed into the function 

// What is Iteration? 
  //  A set of instructions that are executed over and again until a condition is met

//  What are the data types we can preform iteration on? 
  //  Arrays
  //  Strings
  //  Objects (under certain circumstances)


// Syntactical Sugar - when developers wrap up large concepts of code / computer science in easy to use syntax 
  // makes heavy lifting code functionality "sweeter" to use

// Higher Order Functions
  //  is a function that takes a function as an argument
  //  HoF's are used by calling on built in methods 
  // they are way more efficient than for loops at iteration 
  // BUT they have very specific use cases 

// HOF's
  // specifically ARRAY METHODS 
//  .forEach()
//  .map()
//  .filter()

// Truthy and Falsey
  

// var showArray = ["Peaky Blinders", "Supernatural", "Rick and Morty", "Chainsaw Man", "Robot Chicken", "Handmaid's Tale"]



//  For Each 
  // will execute a set of commands ONCE PER ITEM in an array it is attached too.
  // takes an argument of a function
  // only runs through the array ONCE


  // showArray.forEach(()=>{
  //   console.log("Hey Golf")
  // })

// "Value" as an argument to our Anon Function
  // value represents the data at the current index of iteration
// showArray.forEach((value) => {
//   console.log(`Hey Golf, I hear you like the show ${value}`)
// })

// "Index" as an argument of our Anon Function 
  // index gives us access to the integer that represents the location of the item in the array
  // showArray.forEach((value, index) => {
  //   console.log(`Hey Golf, I hear you like the show ${value}, it's index is ${index}`)
  // })

// "Array" as an argument of our Anon Function
  // showArray.forEach((shows, index, array) => {
  //   console.log(`Hey Golf, I hear you like the show ${shows}, it's index is ${index}. It belongs to the array that contains ${array}`)
  // })

//  banana and renita as arguments
  // showArray.forEach((banana, renita) => {
  //   console.log(`Hey Golf, I hear you like the show ${banana}${renita}`)
  // })

// skipping over Index
  // showArray.forEach((shows, index, array) => {
  //   console.log(`Hey Golf, I hear you like the show ${shows} It belongs to the array that contains ${array}`)
  // })

// var numsArray = [6, 12, 18, 24]

//  numsArray.forEach((value)=>{
//     console.log(value * 10)
//  })

//   .forEach() review
      //  works on arrays by using dot notation with the method .forEach()
      // .forEach() Anon Function takes three arguments
        // value - which gives access to the data inside the array
        // index - which gives us the integer representing the position of the data
        // array - which gives us access to the entire data set itself


//  Map 
  // takes the same three arguments as forEach
  // it ALWAYS returns to us a NEW array of the SAME length as the original array
  // that means we need to assign our map to a new variable
  // the anon function with maps needs a RETURN

 var threesArray = [3, 6, 9, 12, 15]

 var mult5 = threesArray.map((value)=>{
  return value * 5
 })

 console.log("mult5:",mult5)
// -> mult5: [ 15, 30, 45, 60, 75 ]

// when we are using only ONE parameter in our HOF we do NOT need our Parentheses
var mult3 = threesArray.map(value => {
  return value * 3
})

console.log("mult3:", mult3)
// -> mult3: [ 9, 18, 27, 36, 45 ]

// when we are only using a SINGLE line of code we don't need curly brackets or the return keyword

var mult10 = threesArray.map(value => value * 10)

console.log("mult10:", mult10)

// create an array that tells us if the number is even or it just gives us the number 

var evenOrNum = threesArray.map( value => {
  if( value % 2 != 0 ) {
    return value
  } else {
    return "even"
  }
})

console.log("evenOrNum:", evenOrNum)
// -> evenOrNum: [ 3, 'even', 9, 'even', 15 ]

//  Filter
  // Works similarly to map- it returns to us an Array BUT
    // the array always wants to be shorter than the original array
  // filter works by looking for boolean values as a return 

// var showArray = ["Peaky Blinders", "Supernatural", "Rick and Morty", "Chainsaw Man", "Robot Chicken", "Handmaid's Tale"]

// var searchP = showArray.filter(value => {
//   return value.includes("p") || value.includes("P")
// })

// console.log(searchP)

// var searchR = showArray.filter(value =>  value.toLowerCase().includes("r"))

// console.log("searchR:",searchR)
// -> searchR: [ 'Peaky Blinders', 'Supernatural', 'Rick and Morty', 'Robot Chicken' ]

//  Filter in a function 

let myArrayOfStuff = [6, 4, 5, true, false, 1000, "hello", "yo", null, 5]

//  Create a function that takes in a array of mixed data and returns an array of only odd numbers 

// create a function named onlyOdds 
  //  parameter is an array
// inside of the function create a new variable that will be the placeholder of the filter
  // variable name is oneType
  // oneType will only be numbers
// filter over oneType and get only the odd numbers 
//  return the final variable

// const onlyOdds = (array) => {
//   let oneType = array.filter(value => typeof value === "number")
//   let odds = oneType.filter(value => value % 2 !== 0)
//   return odds
// }

const onlyOdds = (array) => {
  return array.filter(value => typeof value === "number" && value % 2 !== 0)
}

console.log("onlyOdds:", onlyOdds(myArrayOfStuff))


