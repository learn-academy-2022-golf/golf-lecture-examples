import React, { useState } from 'react'
// import section^

// functional component v
const App = () => {
  let [userNames, setUserNames] = useState(['diverStone', 'brandySavage', 'alf', 'anon123'])

  let [userNameIndex, setUserNameIndex] = useState(0)

  const randomUserNameIndex = () => {
    let randomNum = Math.floor(Math.random() * userNames.length)
    setUserNameIndex(randomNum)
  }

  // the functional return / display data / jsx section V
  return (
    <>
      <h2 onClick={randomUserNameIndex}> Hello {userNames[userNameIndex]}</h2>
    </>
  )
}

export default App