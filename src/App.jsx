import { useState } from "react";
import "./app.css";

// Componente principal del juego de dados
const DiceGame = () => {
  // Variables de estado
  const [scores, setScores] = useState([0, 0]); // Puntuaciones de los jugadores
  const [currentScore, setCurrentScore] = useState(0); // Puntuación actual del jugador activo
  const [activePlayer, setActivePlayer] = useState(0); // Jugador activo (0 o 1)
  const [diceValue, setDiceValue] = useState(5); // Valor del dado
  const [isDiceHidden, setIsDiceHidden] = useState(true); // Estado de visibilidad del dado
  const [isGameOver, setIsGameOver] = useState(false); // Estado del juego (si ha terminado o no)
  const [winner, setWinner] = useState(null); // Ganador del juego

  // Función para inicializar los datos del juego
  const initData = () => {
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setIsDiceHidden(true);
    setIsGameOver(false);
    setWinner(null);
  };

  // Función para manejar el lanzamiento del dado
  const handleRollDice = () => {
    const dice = Math.trunc(Math.random() * 6) + 1; // Genera un número aleatorio entre 1 y 6
    setDiceValue(dice);
    setIsDiceHidden(false);

    if (dice !== 1) {
      const newCurrentScore = currentScore + dice; // Suma el valor del dado a la puntuación actual
      setCurrentScore(newCurrentScore);
    } else {
      setCurrentScore(0); // Si el dado es 1, resetea la puntuación actual
      setActivePlayer(activePlayer === 0 ? 1 : 0); // Cambia el jugador activo
    }
  };

  // Función para manejar la acción de "Hold"
  const handleHold = () => {
    const newScores = [...scores];
    newScores[activePlayer] += currentScore; // Añade la puntuación actual a la puntuación total del jugador activo
    setScores(newScores);

    if (newScores[activePlayer] >= 100) {
      setIsGameOver(true); // Si la puntuación del jugador activo es 100 o más, el juego termina
      setWinner(activePlayer); // Establece al jugador activo como ganador
    } else {
      setCurrentScore(0); // Resetea la puntuación actual
      setActivePlayer(activePlayer === 0 ? 1 : 0); // Cambia el jugador activo
    }
  };

  return (
    <main>
      {/* Sección del jugador 1 */}
      <section
        className={`player player--0 ${
          activePlayer === 0 ? "player--active" : ""
        } ${winner === 0 ? "player--winner" : ""}`}
      >
        <h2 className="name" id="name--0">
          {winner === 0 ? "Winner!" : "Player 1"}
        </h2>
        <p className="score" id="score--0">
          {scores[0]}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            {activePlayer === 0 ? currentScore : 0}
          </p>
        </div>
      </section>
      {/* Sección del jugador 2 */}
      <section
        className={`player player--1 ${
          activePlayer === 1 ? "player--active" : ""
        } ${winner === 1 ? "player--winner" : ""}`}
      >
        <h2 className="name" id="name--1">
          {winner === 1 ? "Winner!" : "Player 2"}
        </h2>
        <p className="score" id="score--1">
          {scores[1]}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--1">
            {activePlayer === 1 ? currentScore : 0}
          </p>
        </div>
      </section>
      {/* Imagen del dado */}
      <img
        src={`dice-${diceValue}.png`}
        alt="Playing dice"
        className={`dice ${isDiceHidden ? "hidden" : ""}`}
      />
      {/* Botón para iniciar un nuevo juego */}
      <button className="btn btn--new" onClick={initData}>
        🔄 New game
      </button>
      {/* Botón para lanzar el dado */}
      <button
        className="btn btn--roll"
        onClick={handleRollDice}
        disabled={isGameOver} // Deshabilitado si el juego ha terminado
      >
        🎲 Roll Dice
      </button>
      {/* Botón para mantener la puntuación */}
      <button
        className="btn btn--hold"
        onClick={handleHold}
        disabled={isGameOver} // Deshabilitado si el juego ha terminado
      >
        📥 Hold
      </button>
    </main>
  );
};

export default DiceGame;
