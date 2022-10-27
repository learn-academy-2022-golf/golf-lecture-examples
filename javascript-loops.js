// Loops

// Iteration - process of repeating over and over

// _______________

// Variables
    // var - is available anywhere (function scoped)
    // let - only available inside the block it is defined in
    // const - cannot redeclare or re-assign variable


if(true) {
  var myName = "Elyse"
}

console.log(myName)


// if(true) {
//   let yourName = "Austin"
// }

// console.log(yourName) // Throws an error


if(true) {
  let yourName = "Austin"
  yourName = "Garrett"
  console.log(yourName)
}

// const myDog = "Bruno"
// myDog = "Kodi" 

// console.log(myDog) // Will throw an error


// ________________________

// Anatomy of a Loop

// To create a for loop
    // Where to start counting (let index = 0)
    // Where to stop counting (index < 10)
    // How to get from the start to the stop (i++)
      // (i++) === (i = i + 1)

// for(let index = 0; index < 10; index++)

for(let i = 0; i < 10; i++) {
  console.log(i)
}

// Connecting Loops to Arrays

const numsArray = [5, 6, 7, 8, 9]

for(let i = 0; i < numsArray.length; i++) {
  console.log("current index:", i)
  console.log("current value:", numsArray[i])
}


// Logic inside Loops

for(let i = 0; i < numsArray.length; i++) {
  if(numsArray[i] % 2 !== 0) {
    console.log(`${numsArray[i]} is an odd number!`)
  }
}


const myString = "Hey there Golf 2022!!"
let count = 0
for(let i = 0; i < myString.length; i++) {
  if(myString[i] === "e") {
    count++
  }
}
console.log(count)


