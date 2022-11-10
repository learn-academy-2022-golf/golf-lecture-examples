import React from 'react'

const UpperCased = (props) => {

  // Created a function to manipulate the data passed in to be all upper cased
  const changeToUpperCase = (userInput) => {
    return userInput.toUpperCase()
  }

  return (
    <>
      <h3>HELLO, I SEE YOUR NAME IS:</h3>
      {/* Invoking function changeToUpperCase and passing props.name as an argument */}
      <p>{changeToUpperCase(props.name)}</p>
    </>
  )
}

export default UpperCased