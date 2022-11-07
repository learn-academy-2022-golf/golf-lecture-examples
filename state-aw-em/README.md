# React State 11/7/22

  $ yarn create react-app state-aw-em
  $ cd state-aw-em
  $ yarn start

React component is built of 3 parts

- the import
  - bringing information to the component

- the function 
  - handles all the logic for our app

- the return
  -handles displaying things to our user
  - Functional components require a return like all functions and instead of returning data the return something visual


Inside of the function we can create variables and other functions to handle data manipulations


Inside of the JSX we can use curly brackets to break back into Javascript.


## State Syntax
```js
import React, { useState } from 'react' 

// alwasy inside of a functional component
// at the top most level
let [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
return (
  <>
    <p>the count is: {count} </p>
  
    <button onClick={increment}>-</button> 
  </>
)
```