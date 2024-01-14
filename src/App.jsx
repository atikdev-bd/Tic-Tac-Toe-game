/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function Square({ value, clickEvent }) {
  console.log(clickEvent);
  return (
    <button
      onClick={clickEvent}
      className=" bg-white text-lg border border-green-700 h-16 w-16 m-2 hover:bg-green-50 leading-9"
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [isNext, setIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i]) {
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
