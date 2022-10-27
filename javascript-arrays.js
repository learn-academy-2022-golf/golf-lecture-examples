//  JavaScript Arrays 10/27/22

var cianiCar = "Porsche Macan"
var anthonyCar = "Dodge Viper"
var annabelleCar = "Audi Q5"
var shannonCar = "Mercedes Benz E-class"
var andreCar = "Ferrari GTO 288"
var immanuelCar = "Corvette C8 Z06"

// console.log(cianiCar)
// console.log(anthonyCar)
// console.log(annabelleCar)

// What is the tool for holding LOTS of data in a single variable? 

// Arrays
  // Componsite Data Type - a data type that holds all other data types 
  // defined by square brackets []
  // Arrays have values -> which is the data in the array
  // Arrays have indexes which are the locations of the values
  // Arrays are indexed like strings starting at zero
  // Arrays values are spereated by commas

var golfCarsArray = [cianiCar, anthonyCar, annabelleCar, shannonCar, andreCar, immanuelCar]
//                      0           1           2           3           4           5
// console.log(golfCarsArray)
  // .length tells how long an array is
// console.log(golfCarsArray.length)

// bracket / index notation for finding values in an array
// console.log(golfCarsArray[0])
// console.log(golfCarsArray[2])
// console.log(golfCarsArray[3])


// Built in Methods for Array 

// Mutators - Changes the original array

// Mutator - .push()
  // append .push() onto an array and it will change the orignal array with what ever value you pass into the argument PUSHED onto the end of the array 

  var golfNamesArray = ["Ceaser", "Matt", "Charlie", "Kenny"]

  // console.log("Pre push array", golfNamesArray)
  //  -> Pre push array [ 'Ceaser', 'Matt', 'Charlie', 'Kenny' ]

    golfNamesArray.push("Tyler")
    // console.log(golfNamesArray.push("Tyler"))  

  // console.log("Post push array", golfNamesArray)
  // -> Post push array [ 'Ceaser', 'Matt', 'Charlie', 'Kenny', 'Tyler' ]

// ____________________________________________________________

// Mutator - .pop()
  // Removes the last value of an array 
  // pop does not take an argument!
  golfNamesArray.pop()

  // console.log("Post pop array", golfNamesArray)

// ____________________________________________________________

// Mutator - .shift()
  // removes the value at the ZEROTH index of the array
  // shift does not take an argument!
  golfNamesArray.shift()

  // console.log("Post shift array", golfNamesArray)
// ____________________________________________________________

//  Mutator - .unshift(value)
  // will place a value at the ZEROTH index of the array, moving all the other values over 
  // This method REQUIRES an argument

  golfNamesArray.unshift("Mike")

  // console.log("Post unshift array", golfNamesArray)
// ____________________________________________________________

// Mutator - .reverse()
  // Reverses the order of the array 
  // does not take an argument 
  golfNamesArray.reverse()
  // console.log("after the .reverse() array", golfNamesArray)

// ____________________________________________________________

//  Accessors - DO NOT CHANGE the orignal array but rather give us a new one
  // we will need to log the methods OR assign a new variable to the methods acting on the array and log that variable 
  var flowersArray = ["Tulips", "Sunflower", "Pin cushion", "Zinnia", "Orchid"]
 // ____________________________________________________________

  // Accessor - .indexOf(value)
    // takes an agrument of some data
    // return the first INDEX that it finds that data at
    // returns -1 if the item is not present in the array

    console.log(flowersArray.indexOf("Zinnia"))
    //  -> 3
    console.log(flowersArray.indexOf("Pansy"))
    //  -> -1
// ____________________________________________________________

  // Accessor - .join(value)
    // converts the entire array into a string 
    
    // console.log(flowersArray.join())
    // -> Tulips,Sunflower,Pin cushion,Zinnia,Orchid
    // console.log(flowersArray.join(""))
    // -> TulipsSunflowerPin cushionZinniaOrchid

    var flowersString = flowersArray.join(" ")
    console.log(flowersString)
  
    // -> Tulips Sunflower Pin cushion Zinnia Orchid
    // console.log(flowersArray.join("u"))
    // -> TulipsuSunfloweruPin cushionuZinniauOrchid
    // ____________________________________________________________

  // Accessor -> .split()
    // converts a string into an array

    console.log(flowersString.split())
    // -> Tulips Sunflower Pin cushion Zinnia Orchid
    console.log(flowersString.split(""))
    // -> [
      //   'T', 'u', 'l', 'i', 'p', 's', ' ',
      //   'S', 'u', 'n', 'f', 'l', 'o', 'w',
      //   'e', 'r', ' ', 'P', 'i', 'n', ' ',
      //   'c', 'u', 's', 'h', 'i', 'o', 'n',
      //   ' ', 'Z', 'i', 'n', 'n', 'i', 'a',
      //   ' ', 'O', 'r', 'c', 'h', 'i', 'd'
      // ]
    console.log(flowersString.split(" "))
    // -> [ 'Tulips', 'Sunflower', 'Pin', 'cushion', 'Zinnia', 'Orchid' ]
    console.log(flowersString.split(" - "))
    // -> [ 'Tulips Sunflower Pin cushion Zinnia Orchid' ]
// ____________________________________________________________

    // Accessor - .concat(value)
      // takes two arrays and turns them into a single array with all of their values presevered 
      var numsArray = [1,4,8,6]
      var lettersArray = ['a', 'f', 'e', 'u']

      var concatArrays = numsArray.concat(lettersArray)

      console.log(concatArrays)
    
// ____________________________________________________________

    // Array Destructuring
      // allows us to make varibales out of array values based on the position within bracket notation
      // var timeArray = ["October", 27, 2022]
      var [month, date, year] = ["October", 27, 2022]
      // console.log(date, month, year)
      console.log(date)
      console.log(date)

    var userName = "Bruce Wayne"
    var splitName = userName.split(" ")
    // console.log(splitName)
    var [firstName, lastName] = splitName

    console.log(firstName)
    console.log(lastName)





    
    









