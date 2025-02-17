import React, { useState, useEffect } from 'react';
import './style.css';

const DiceGame = () => {
  // Varaibles
  const [scores, setScores] = useState([0, 0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [diceValue, setDiceValue] = useState(5);
  const [isDiceHidden, setIsDiceHidden] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

    // Init data
    const initData = () => {
      setScores([0, 0]);
      setCurrentScore(0);
      setActivePlayer(0);
      setIsDiceHidden(true);
      setIsGameOver(false);
      setWinner(null);
    };

  const handleRollDice = () => {
    const dice = Math.trunc(Math.random() * 6) + 1;
    setDiceValue(dice);
    setIsDiceHidden(false);

    if (dice !== 1) {
      const newCurrentScore = currentScore + dice;
      setCurrentScore(newCurrentScore);
    } else {
      setCurrentScore(0);
      setActivePlayer(activePlayer === 0 ? 1 : 0);
    }
  };

  const handleHold = () => {
    const newScores = [...scores];
    newScores[activePlayer] += currentScore;
    setScores(newScores);
    
    if (newScores[activePlayer] >= 100) {
      setIsGameOver(true);
      setWinner(activePlayer);
    } else {
      setCurrentScore(0);
      setActivePlayer(activePlayer === 0 ? 1 : 0);
    }
  };

  return (
    <main>
      {/* Componentes pig */}
    </main>
  );
};

export default DiceGame;