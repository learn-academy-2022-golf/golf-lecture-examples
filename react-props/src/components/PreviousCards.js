import React from 'react'

const PreviousCards = (props) => {
  return (
    <>
      <h2>Previous Cards:</h2>
      {props.previousCards.map((card, index) => {
        return(
          <p key={index}>{card}</p>
        )
      })}
    </>
  )
}

export default PreviousCards