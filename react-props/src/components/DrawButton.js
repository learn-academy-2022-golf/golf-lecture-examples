import React from 'react'

const DrawButton = (props) => {
  return (
    <>
      <button onClick={props.drawCard}>Draw a card</button>
    </>
  )
}

export default DrawButton