import React from 'react'
import '../index.css';

export default function Card({card}) {
  return (
    <div className="card">
      <div className="card-name">{card.name}</div>
      <div className='card-description'>{card.description}</div>
    </div>
  )
}