import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';
import data from '../deck.json';

export default function Deck({cards}) {

  const [category, setCategory] = useState('Animals');
  const [deck, setDeck] = useState([])
  const [card, setCard] = useState(null)
  const shouldLog = useRef(true);

  useEffect(() => {
    if(shouldLog.current) { 
      shouldLog.current = false;
      if(cards != null) {
        setDeck(cards)
      }else{
        fetchDeck()
      }
    }
  }, []);

  const fetchDeck = async () => {
    // load local json
    const localDeck = data;
    const cards = localDeck.categories.filter(cat => cat.category === category)[0].cards;
    setDeck(cards)
  }

  const drawCard = async () => {
    await setCard(deck.cards[0]);
  }

  return (
    <div className="card-container">
      {deck.map(cardInDeck => (
        <Card key={cardInDeck.id} card={cardInDeck} />
      ))}
    </div>
  )
}