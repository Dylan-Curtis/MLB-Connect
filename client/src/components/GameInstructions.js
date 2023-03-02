import React from "react";

function GameInstructions() {
  return (
    <div>
      <h2>How to Play the Game</h2>
      <ol>
        <li>Start by selecting the "New Game" option.</li>
        <li>The game starts with a 4x4 grid with 3 times up the side and across the grid</li>
        <li>The goal of the game is to match up those teams and name a player that played for both teams </li>
        <li>The player entered must be spelled correctecly and must inlude botht the first and last name of the player</li>
        <li>a green background in the grid indicated a correct answer, a yellow means the player played for one but not both teams, and a read indicated that the player did not play for either teams</li>
        <li>Good Luck!</li>
      </ol>
    </div>
  );
}

export default GameInstructions;