# React Inputs and Events

- Events occurs anytime a user or the browser manipulates a webpage
  - clicking buttons, key strokes, resizing window (etc)

- Inputs are types of events and will use an onChange (text, password, email, color, date, etc..)
  - Default input type is text


- onChange is an attribute that lives on the input tag that listens for changes

- Event is passed to us automatically from onChange attribute
- Event is an object


```javascript
// App.js

import './App.css';
import { useState } from 'react'
import UpperCased from './components/UpperCased'

const App = () => {

  const [name, setName] = useState("")

  const handleChange = (e) => {
    // console.log(e) // event is an object with many key value pairs
    // console.log(e.target) // Inside target is a key called value
    // console.log(e.target.value) // Display the value inside the input
    setName(e.target.value)
  }

  return (
    <>
      <h1>Greeter App</h1>
      {/* onChange is an attribute that automatically passes the event property which is an object */}
      <input type="text" onChange={handleChange} />
      <UpperCased name={name} />
    </>
  );
}

export default App;




// components/UpperCased.js

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
```