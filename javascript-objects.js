// JavaScript Objects 11/2/2022

// Datatypes
// Primitive datatypes - can't be broken down any further
// string
// number
// null
// boolean
// undefined
// symbol - unique identifier

// non-primitive
// objects - collections of things
// array - falls into the category of objects

// [2, 3, 4] - index

// CSS:
// h1 {
//   color: "blue"
// }

// {key: "value"}
// key - symbol
// value - anything recognized by JavaScript

// const myObject = {key4: 99, key1: 1, key2: "hello!", key3: "i am a value"}
// console.log(myObject)
// console.log(myObject.key2)
// --> hello!

// const breakfast = {
//   item1: "toast",
//   item2: "bagel",
//   item3: "bacon",
//   item4: "halloween candy",
//   item5: "existential dread",
//   item6: {
//     beverage1: "pumpkin spice latte",
//     beverage2: "orange mocha frappachino",
//     beverage3: "hot chocolate",
//     beverage4: {
//       juice1: "orange",
//       juice2: "mimosa"
//     }
//   }
// }
// console.log(breakfast)
// console.log(breakfast.beverage2)
// --> undefined
// console.log(breakfast.item6.beverage2)
// --> orange mocha frappachino
// console.log(breakfast.item6.beverage4.juice2)
// --> mimosa

// console.log(item1)
// --> ReferenceError: item1 is not defined
// console.log(breakfast.item6.beverage4.juice1)
// console.log(breakfast.item6.beverage4.juice2)

// Destructuring - creating a shortcut into the path of a nested object
// const { juice1 } = breakfast.item6.beverage4
// const { juice1, juice2 } = breakfast.item6.beverage4
// console.log(juice1)
// console.log(juice2)

// const { beverage2, beverage1, beverage3 } = breakfast.item6
// console.log(beverage2)


// Method - built in methods, methods are behavior that belong to an object
// "hello".toUpperCase()
// [2, 3, 4].map()

// this - keyword that references the object when you are inside the object

const math = {
  number1: 5,
  number2: 10,
  number3: 18,
  addUp: function() {
    return this.number1 + this.number2 + this.number3
  },
  addUp2: function() {
    return this.number1 + this.number2
  }
}
// console.log(math.addUp)
// --> [Function: addUp]
// console.log(math.addUp())
// --> 33
// console.log(math.addUp2())
// --> 15


// Method - a function that belongs to an object
// Objects - intersection between data and behavior

const pets = [
  {name: "Backup", type: "dog", age: 3},
  {name: "Oso", type: "dog", age: 1},
  {name: "Gertrude", type: "plant", age: 6},
  {name: "Bebop", type: "cat", age: 10}
]

// console.log(pets.length)
// --> 4
// console.log(pets[0])
// --> { name: 'Backup', type: 'dog', age: 3 }
// console.log(pets[2].name)
// --> Gertrude

// Create a function that takes in an array of pets and return an array with just pet names.
// map - will return an array the same length

const petNames = (array) => {
  return array.map((object) => {
    return object.name
  })
}

// console.log(petNames(pets))
// --> [ 'Backup', 'Oso', 'Gertrude', 'Bebop' ]

// Create a function that takes in the pet array and returns the pet objects that are dogs.

const onlyDogs = (array) => {
  return array.filter((object) => {
    return object.type === "dog"
  })
}

// console.log(onlyDogs(pets))



const breakfast = {
  item1: "toast",
  item2: "bagel",
  item3: "bacon",
  item4: "halloween candy",
  item5: "existential dread",
  item6: {
    beverage1: "pumpkin spice latte",
    beverage2: "orange mocha frappachino",
    beverage3: "hot chocolate",
    beverage4: {
      juice1: "orange",
      juice2: "mimosa"
    }
  }
}
// Edge case:
console.log(breakfast["item5"])
