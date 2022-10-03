import React from 'react';
import { useGame } from '../context/GameContext';

const suitMap = {
  hearts: '❤️',
  spades: '♠️',
  clubs: '♣️',
  diamonds: '♦️',
};

export default function Card({ card, player }) {
  const { setFrom, selectedCard, setSelectedCard } = useGame();

  function handleCardClick() {
    setFrom(player);
    setSelectedCard(card);
  }

  // if there IS a selected card, and it has the same value and suit as THIS card, style it differently
  const thisIsTheSelectedCard =
    selectedCard && selectedCard.value === card.value && selectedCard.suit === card.suit;

  return (
    <div className={`${thisIsTheSelectedCard ? 'selected' : ''} card`} onClick={handleCardClick}>
      <div>{suitMap[card.suit]}</div>
      <div>{card.value}</div>
    </div>
  );
}
