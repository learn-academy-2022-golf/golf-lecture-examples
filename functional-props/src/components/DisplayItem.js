import React from 'react'

const DisplayItem = (props) => {
  return (
    <div style={{height: "100px", width: "100px", border:"solid black 2px"}} >
      
      <em>{props.item}</em>
      {/* When we invoke the function inside the onClick, we are passing back up to App.js information about this specific item being clicked (this is the argument) */}
      <button onClick={() => { props.addToCart(props.item) }}>Add this item to your cart</button>
    </div>
  )
}

export default DisplayItem


