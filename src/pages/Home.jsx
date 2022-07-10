import React from 'react'
import { useState, useEffect } from 'react';
import '../index.css';
import styled from 'styled-components';
import Deck from '../components/Deck';

export default function Home() {

    const [deck, setDeck] = useState()
    
  return (
    <>
        <TitleBar>Deckly</TitleBar>
        <Deck cards={deck}/>
    </>
  )
}

const TitleBar = styled.div`
  background-color: var(--surface-1);
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;

  .logo{
    font-size: 1.5rem;
    font-weight: 500; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    // pad content
    padding: 0 10px;
    color: white;

    text-decoration: none;
  }
  `;
const SAMPLE_CARDS = [
    {
        id: 1,
        category: 'animals',
        text: 'Lion'
    },
    {
        id: 2,
        category: 'animals',
        text: 'Tiger'
    },
    {
        id: 3,
        category: 'animals',
        text: 'Wolf'
    }
]
