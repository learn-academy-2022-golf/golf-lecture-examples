import React, { useState } from 'react'
import './App.css'
import DisplayItem from './components/DisplayItem'
import stores from './stores'

const App = () => {

    // State for cart
      //state is local memory held in the browser
    const [cart, setCart] = useState([])

    // functionality for adding items to the cart

    const addToCart = (item) => {
        // console.log("addToCart worked with:", item);
      setCart([...cart, item])
    }

  return (
    <>
    
      <h1>Knock of Door Dash</h1>

      <h3>You currently have {cart.length} items in your cart.</h3>
      <h4> Your cart: {cart}</h4>
      <div >
        <h2>ChikFilfila</h2>
        <div className="wrap">
          {stores.ChikFilfila.map((chikItem, index)=>{
            return <DisplayItem item={chikItem} addToCart={addToCart}/>
        })}
        </div>
        <h2>Burger Queen</h2>
        <div className="wrap">
          {stores.BurgerQueen.map((queenItem, index) => {
            return <DisplayItem item={queenItem} addToCart={addToCart} />
          })}
        </div>
        <h2>Jack and the Triangle</h2>
        <div className="wrap">
          {stores.JackTriangle.map((jackItem, index)=>{
            return <DisplayItem item={jackItem} addToCart={addToCart} />
          })}
        </div>
      </div>

    </>
  )
}

export default App
