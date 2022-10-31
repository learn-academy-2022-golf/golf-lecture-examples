// JavaScript - Functions Loops Arrays 10/31/22

// What is a Function?
  // a little machine in your code whoes job it is to give you an output, takes an input and always gives an output.

// What is Iteration? 
  // The process of repeating instructions until a certain condition is met.

// What is an Array?
  // A list of data
  // A data type for large or small amounts of data
  // Composite data type
    // It can hold any other data type 
  // Square brackets - []
    // Value and Index
      // the data in the array, and the location of the data
    // Indexes start at zero

const myArrayOfNumbers1 = [1, 2, 3, 4, 5]
const myArrayOfNumbers2 = [15, 25, 35, 45, 55]
const myArrayOfNumbers3 = [11, 42, 50, 456, 987232]

// Create a function that takes in a single array as a parameter 
const mult5 = (arr) => {
  // parameter has a name like a pirate "arr"
  // utelize a for loop to iterate through the array
  // create a new array to save all the multiplied values in
  let newArr = []

  for(let i = 0; i < arr.length; i++ ){
    // for loop index should start at 0
    // for loop should stop at the end of the array / length of the array
    // Increment after each execution 
  
    // multiply each value by 5
      // value will be the array at current index of the for loop
      newArr.push(arr[i] * 5)
    }
    // and returns that array with each of the values inside of it multiplied by 5
    // return the newArr
    return newArr
  }
  
  // invoke the function 
console.log(mult5(myArrayOfNumbers1))
console.log(mult5(myArrayOfNumbers2))
console.log(mult5(myArrayOfNumbers3))


// create a function that takes a list of names in the class as an Array and returns a list of names from the class but in a randomized order

// create an array of names
// create a function named randomNames
  // takes in an array as a parameter - arr
  // create a variable which is an empty array - newArr
  // create a for loop which is definded by the arr.
    // save the student at the current index
    // create a RNG (random number generator) to identify a name in the array
    // swap the current index with a random student
    // give the saved student the random students spot
    
      

// returns a new array with all of the original names but in a randomized order

const randomNames = (arr) => {
    
  for(let i = 0; i < arr.length; i++){
    
    let placeHolderStudent = arr[i]

    let randomIndex = Math.floor(Math.random() * arr.length)
    
    arr[i] = arr[randomIndex]

    arr[randomIndex] = placeHolderStudent

  }
  return arr
}


var golfNames = [
  'Shannon',
  'Philip',
  'Annabella',
  'Mike',
  'Tyler',
  'Garrett',
  'Immanuel',
  'Anthony',
  'Kent',
  'Blake',
  'Kenny',
  'Mat',
  'Zeke',
  'Andre',
  'Tabitha',
  'Renita',
  'Ciani',
  'Manny',
  'Francisco',
  'Charlie',
  'Cesar'
]

console.log(randomNames(golfNames))