/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

/// square func to set square value////
function Square({ value, clickEvent }) {
  return (
    <button
      onClick={clickEvent}
      className=" bg-white text-lg border border-green-700 h-16 w-16 m-2 hover:bg-green-50 leading-9"
    >
      {value}
    </button>
  );
}

/// Board function is used state and logical condition ///
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  /// Toggle State ///
  const [isNext, setIsNext] = useState(true);

  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player  " + (isNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const squaresArr = squares.slice();

    if (isNext) {
      squaresArr[i] = "X";
    } else {
      squaresArr[i] = "O";
    }

    setSquares(squaresArr);
    setIsNext(!isNext);
  }

  return (
    <>
      <div className="font-bold ms-2 ">{status}</div>
      <div className="flex">
        <Square value={squares[0]} clickEvent={() => handleClick(0)} />
        <Square value={squares[1]} clickEvent={() => handleClick(1)} />
        <Square value={squares[2]} clickEvent={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} clickEvent={() => handleClick(3)} />
        <Square value={squares[4]} clickEvent={() => handleClick(4)} />
        <Square value={squares[5]} clickEvent={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} clickEvent={() => handleClick(6)} />
        <Square value={squares[7]} clickEvent={() => handleClick(7)} />
        <Square value={squares[8]} clickEvent={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
