# Props

Props are short for properties 
- passes information or methods from parent component (App.js) to child component
- props is an object
- props are read only
- pass arguments as attributes through the component call
   <Card cards={cards} index={randomIndex}/>
- referenced inside of component as props (as a parameter)
    const Card = (props) => {


Code:
```javascript


//___________________________________
// App.js

import { useState } from 'react'
import './App.css';
import Card from './components/Card'
import DrawButton from './components/DrawButton'
import PreviousCards from './components/PreviousCards'

const App = () => {
  const [cards, setCards] = useState(["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"])
  const [randomIndex, setRandomIndex] = useState(null)
  const [previousCards, setPreviousCards] = useState([])

  const drawCard = () => {
    let randomCard = Math.floor(Math.random() * cards.length)
    setRandomIndex(randomCard)
    setPreviousCards([...previousCards, cards[randomIndex]])
  }

  return (
    <>
      <h1>Card Draw</h1>
      <DrawButton drawCard={drawCard}/>
      <Card cards={cards} index={randomIndex}/>
      <PreviousCards previousCards={previousCards} />
    </>
  );
}

export default App;



//___________________________________
// ./components/Card.js

const Card = (props) => {
  return(
    <>
      <h2>Current Card</h2>
      <p>{props.cards[props.index]}</p>
    </>
  )
}

export default Card


//___________________________________
// ./components/DrawButton.js

import React from 'react'

const DrawButton = (props) => {
  return (
    <>
      <button onClick={props.drawCard}>Draw a card</button>
    </>
  )
}

export default DrawButton


//___________________________________
//  ./components/PreviousCards.js

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
```



