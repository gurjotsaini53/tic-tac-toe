import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [isXNext, setXNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function restart() {
    window.location.reload();
  }
  function winner(square) {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i];

      if (square[a] && square[a] == square[b] && square[b] == square[c]) {
        return square[a];
      }
    }
    return null;
  }
  function handleClick(i) {
    const nextSquares = square.slice();

    if (square[i] || winner(square)) {
      return;
    }
    if (isXNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquare(nextSquares);
    setXNext(!isXNext);
  }

  const whoIsWinner = winner(square);
  let Status = "Start Game";
  if (whoIsWinner) {
    Status = "Winner is : " + whoIsWinner;
  } else {
    Status = "Next Player : " + (isXNext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{Status}</div>
      <div className="board-row">
        <Square
          value={square[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={square[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={square[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={square[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={square[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={square[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={square[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={square[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={square[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>

      <button className="restart" onClick={restart}>
        Restart
      </button>
    </>
  );
}
