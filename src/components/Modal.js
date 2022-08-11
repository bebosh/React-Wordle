import React from 'react';

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You win!</h1>
          <p className="solution"> {solution} </p>
          <p>You found the correct solution in {turn} rounds!</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You loose!</h1>
          <p>You found the correct solution was {solution} </p>
        </div>
      )}
    </div>
  );
}
