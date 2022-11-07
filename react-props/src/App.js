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
