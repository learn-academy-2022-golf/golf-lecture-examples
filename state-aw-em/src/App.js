import React, { useState } from 'react'
// import ^


// functional component v
const App = () => {
  // declare a variable count inside of the component app 
  // instead of creating a regular JS variable we need to create a State variable 
    // this will alow us to track changes to information and rerender ONLY THE NECESSARY PARTS 
  
  // let count = 0
  let [count, setCount] = useState(0)
  let [userNames, setUserNames] = useState(['diverStone', 'brandySavage', 'alf', 'anon123'])
  let [userNameIndex, setUserNameIndex] = useState(0)


  // create two functions one called increment and one called decrement that change the count up one or down one respectively

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const randomUserNameIndex = () => {
    let randomNum = Math.floor(Math.random() * userNames.length)
    setUserNameIndex(randomNum)
  }
  // the functional return / display data
  return (
    <>
      <h1>Welcome to my counter app</h1>
      {/* use curly brackets to break back into javascript */}
      <p>the count is: {count} </p>
      {/* two buttons for the user to increment and decrement the count */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <h2 onClick={randomUserNameIndex}> Hello {userNames[userNameIndex]}</h2>
      
    </>
  )
}

export default App