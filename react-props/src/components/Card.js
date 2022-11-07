const Card = (props) => {
  return(
    <>
      <h2>Current Card</h2>
      <p>{props.cards[props.index]}</p>
    </>
  )
}

export default Card