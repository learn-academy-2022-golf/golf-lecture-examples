// JavaScript Introduction 10/26/22

// JavaScript 
  // Invented in the early 90's 
  // Brenden Eich and Netscape 
  // Built in two weeks 
  // LiveScript 
  // Java was another program built by different people in the 90's
  // JavaScript is a name change to hop on a hypetrain
  // es6 is another name for the current standard of JavaScript


  // Scripting language 
    //  It allows developers to write logic, behavior and save data temporarily
  // Dynamic language 
    // Datatypes are not static within the logic of JavaScript
  // Interperted Languge 
    // Uses an Interperter to turn the script into machine code one line at a time 
  

  // JavaScript Primitive Data Types
    //  String
    //  Number
    //  Boolean
    //  Null
    //  Undefined
    //  Symbol 

// Numbers
  24
    // Integer 
     1 
     2
     3
     42
     420
     150000210
    //  Float - Default for javascript decimal 
    0.001
    5.346897
    1.11111
    // Decimal 
    0.16546316843541
    // Big Integer
    568743168438576231

// console.log()
  //  A built in method .log() that ineracts with the console of whatever interperter is running JavaScript 
  // the console.log takes an argument of whatever you want to be printed out in console
  // an argument is data passed to a method or function in parentheses

  // ex.   console.log(argumnet)
  
// Node is our JavaScript Interperter 
  // The command for running a javascript file is 
    // $ node fileName.js

// JavaScript allows us to do math on numbers

// Addition
  // 40 + 60
    console.log(40 + 60)
    // -> 100
    console.log(0.1 + 0.2)
    // -> 0.30000000000000004
// Subtraction  
    console.log(12 - 4)
    console.log(4 - 12)
//  Multiplication 
    console.log(42 * 34)
    console.log(88 * 11)
//  Division
    console.log(120 / 4)
// Exponents 
    console.log(25 ** 5)
// Modulus / Modulo
    console.log(5 % 2)
    console.log(6 % 2)
    console.log(9 % 3)
    console.log(11 % 4)

// String
  // refers to a "string" of characters 
  // defined by quotes
 // "" // useful for strings with words like can't in them
 // '' // useful for strings that will have quotes in them
 // `` // useful for when you need to insert JavaScript data into the string, string interporlation 
      // `my name is ${userName}`
// Strings are used for communicating to other HUMANS and for saving data
// all of the characters inside the quotes are ONE piece of data=
  // "Red Solo Cup"
  console.log("Red Solo Cup".length)
  //   -> 12
  console.log("Renita".length)
  //   -> 6
  console.log("     ".length)
  //   -> 5
  console.log("Red Solo Cup")
  // numbers as strings
  console.log('3', 3)
  console.log("three")
// Strings are ZERO INDEXED
//   index notation is created by using square brackets []
//   indexes are ALWAYS numbers
//   indexes always start at zero
  console.log("Austin"[0])
  //           ^
  //           0
console.log("Austin"[3])
//    -> t
console.log("Ciani"[3])
//    -> n
console.log("Andre"[4])
//    -> e
console.log("Kent"[7])
//    -> undefined 

// Boolean 
  true 
  false

// Booleans are great for comparisons of data
  // Equality Operators 
    //  Loose equality,  ==
      // console.log( 3 == 3)
      // console.log( 4 == 3)
      // console.log( 2 + 1 == 3)
      // console.log('3' == 3)
      // console.log('three' == 3)
      // console.log(true == 'true')

    // Strict Equality, ===
      // console.log(3 === 3)
      // console.log(3 === '3')
      // console.log(true === 'true')

//  Type Coercion 
  // Beacuse Javascript is dynamically typed Javascript will forcibly change the data type of its data to fit the current operation
  // As developers it's our job to track ALL of these forced changes


  // Relational Operators 
    // looks for relationships between two values 
      // greater than
       4 > 3
      // less than 
      3 < 4
      // greater than or equal too
      5 >= 5
      5 >= 2
      // less than or equal too
      2 <= 5
      5 <= 5

      // console.log(5 <= 2)
      // console.log(5 >= 2)
      // console.log("Tabi".length > 3)

  // Logical Operators 
    // evalautes whats on either side of the operator and returns a boolean value
  // AND &&
  console.log(true && true)
    // -> true
  console.log(true && false)
    // -> false
  console.log(5 > 2 && 42 < 100)
  // OR ||
  console.log(true || true)
    // -> true
  console.log(true || false)
    // -> true
  console.log(5 > 2 || 42 > 100)
  // NOT ! (aka bang operator)
    // try not to use more than one NOT operator in any one line of code 
    console.log(!true)
    console.log(!false)
    console.log(!true && true)
    console.log(!true || true)
   
  
// Undefined 
  // a place holder for something that should or could become defined  
undefined 
console.log(undefined)

// Null 
 null
 // It represents a non zero nothing value
 console.log(null)
 console.log(null == 0)

// Symbol
  // unique KEY Indentifiers 
 ":symbol"

//  Variables
  // a placeholder for data that can be held in local memory and updated, changed, manipulated by logic
  // Varibale declaration 
    //  var, let ,   const 
  // Variable name
    // can be a custome name but must follow the casing convention of camelCase
      // myName
      // userName
      // batmanSupermanAquaman
      // x
      // y
  // Assignment Operator 
    // =
  // the Data itself
    // can be any of the 6 pirimitive data types or any composite data type or behavior
    // the variable of myName is assigned to the string of Austin
      var myName = "Austin"

    // the variable of ourCohort is assigned to the string of Golf
      var ourCohort = "Golf"
      console.log(ourCohort)
      console.log(`${myName} is the instructor for the LEARN cohort ${ourCohort}`)
    // myName = "Trish"
    // ourCohort = "Foxtrot"
      console.log(`${myName} is the instructor for the LEARN cohort ${ourCohort}`)

// Built in Methods
  // are pieces of code developed by JavaScript Engineers and given to us to do common operations in javascript 
  // to use this code you only have to call on it's name || invoke the method 
    // MUST BE ON THE RIGHT KIND OF DATA
  
  // "charlie".toUpperCase()

  console.log("charlie".toUpperCase())
  // -> CHARLIE

  console.log("manny".toUpperCase())
  // -> MANNY

  console.log(ourCohort.toUpperCase())
  // -> GOLF