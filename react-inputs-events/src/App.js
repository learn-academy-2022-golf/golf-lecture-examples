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
