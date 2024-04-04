import React, { useState } from "react";
import Sqaure from "./Square";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [isButtonDisabled, setButtonDisabled] = useState(Array(9).fill(false));

  const current = history[stepNumber];

  // Function to restart the game
const restart = () => {
  setHistory([Array(9).fill(null)]);
  setStepNumber(0);
  setXIsNext(true);
  setButtonDisabled(Array(9).fill(false));
};

  // Winner selection function
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  if (squares.every((square) => square !== null)) {
    return 'Draw';
  }

  return null;
}


  // Function to handle a click on a square
  const handleClick = (index) => {
    if (calculateWinner(current) || current[index] || isButtonDisabled[index]) {
      return;
    }

    const newHistory = history.slice(0, stepNumber + 1);
    const newSquares = [...current];
    newSquares[index] = xIsNext ? "X" : "O";

    setHistory([...newHistory, newSquares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);

    const newButtonDisabled = [...isButtonDisabled];
    newButtonDisabled[index] = true;
    setButtonDisabled(newButtonDisabled);
  };

  // Function to jump to a specific step in the game
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  // Winner selection function remains the same

  const result = calculateWinner(current);
  let status;

  if (result === "Draw") {
    status = "It's a draw! Restart the game.";
  } else if (result) {
    status = "Winner: " + result + ", Restart the Game";
  } else {
    status = "Player " + (xIsNext ? "X Turn" : "O Turn");
  }

  return (
    <>
      <div className="navbar">
        <div className="title">
          <p>Tic Tac Toe</p> 
        </div>
      </div>

      <div className="container text-center table">
        <h1>
          <button className="restart-btn"
            onClick={() => restart()}
            style={{
              backgroundColor: "silver",
              width: "200px",
              height: "50px",
              marginBottom: "20px",
              color: "black",
            }}
          >
            Restart the game
          </button>
        </h1>
        <div className="status">{status}</div>
        <div className="matrix">
          {current.map((value, index) => (
            <div className="cell" key={index}>
              <Sqaure onClick={() => handleClick(index)} value={value} />
            </div>
          ))}
        </div>
        
      </div>
      <div className="game-info">
          <ol>
            {history.map((step, move) => {
              const desc = move ? "Go to move #" + move : "Go to game start";
              return (
                <li key={move}>
                  <button className="game-btn" onClick={() => jumpTo(move)}>{desc}</button>
                </li>
              );
            })}
          </ol>
        </div>
    </>
  );
}

export default App;
