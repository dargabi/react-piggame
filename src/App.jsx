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
  
  return (
    <main>
      {/* Componentes pig */}
    </main>
  );
};

export default DiceGame;