// Javascript Conditionals

// if(condition is true) {
//   do this action
// } else {
//   do this instead
// }

if(true) {
  console.log("I'm true")
} else {
  console.log("Here is the else")
}


if(false) {
  console.log("I'm true")
} else {
  console.log("Here is the else")
}



let myName = "Else"

if(myName === "Elyse") {
  console.log("Hey Elyse")
} else {
  console.log("Hey!")
}


// Else If

let num1 = 14
let num2 = "14"

if(num1 > num2) {
  console.log(`${num1} is greater than ${num2}`)
} else if(num1 < num2) {
  console.log(`${num1} is less than ${num2}`)
} else if(num1 == num2) {
  console.log(`${num1} and ${num2} are the same`)
} else {
  console.log("Invalid entry")
}


// Loose Equality vs Strict Equality
// ==       vs       ===
// Loose Equality - evaluate only the value (may use type coercion)
// Strict Equality - evaluate the data type and the value

// Type Coercion - Converting value from one type to another