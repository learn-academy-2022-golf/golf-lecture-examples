import React, { useState } from 'react'
import './App.css'
import DisplayItem from './components/DisplayItem'
import stores from './stores'

const App = () => {

    // State for cart
      //state is local memory held in the browser
    const [cart, setCart] = useState([])

    // functionality for adding items to the cart

    // Item is our parameter that we are pulling from DisplayItem when invoking the function.  The current iteration of the food item when clicked is passed as an argument when clicked and becomes item parameter here.
    const addToCart = (item) => {
        // console.log("addToCart worked with:", item);
      setCart([...cart, item])
    }

    const appButton = (string) => {
      console.log(string)
    }

  return (
    <>
    
      <h1>Knock of Door Dash</h1>
      <button onClick={() => {appButton("Hi!")}}> App button </button>
      <h3>You currently have {cart.length} items in your cart.</h3>
      <h4> Your cart: {cart}</h4>
      <div >
        <h2>ChikFilfila</h2>
        <div className="wrap">
          {stores.ChikFilfila.map((chikItem, index)=>{
            // We are passing the function addToCart to Display item as props to add a button to each item being displayed
            return <DisplayItem item={chikItem} addToCart={addToCart} key={index}/>
        })}
        </div>
        <h2>Burger Queen</h2>
        <div className="wrap">
          {stores.BurgerQueen.map((queenItem, index) => {
            return <DisplayItem item={queenItem} addToCart={addToCart} key={index}/>
          })}
        </div>
        <h2>Jack and the Triangle</h2>
        <div className="wrap">
          {stores.JackTriangle.map((jackItem, index)=>{
            return <DisplayItem item={jackItem} addToCart={addToCart} key={index}/>
          })}
        </div>
      </div>

    </>
  )
}

export default App
