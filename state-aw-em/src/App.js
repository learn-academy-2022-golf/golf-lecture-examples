import React, { useState } from 'react'
import Count from './components/Count'
import './App.css'
// import section^

// functional component v
const App = () => {
  let [userNames, setUserNames] = useState(['diverStone', 'brandySavage', 'alf', 'anon123'])

  let [userNameIndex, setUserNameIndex] = useState(0)

  let [color, setColor] = useState("purple")

  const randomUserNameIndex = () => {
    let randomNum = Math.floor(Math.random() * userNames.length)
    setUserNameIndex(randomNum)
  }

  // the functional return / display data / jsx section V
  return (
    <>
      <Count/>
      
      <h2 onClick={randomUserNameIndex} style={{backgroundColor: color}}> Hello {userNames[userNameIndex]}</h2>
    </>
  )
}

export default App