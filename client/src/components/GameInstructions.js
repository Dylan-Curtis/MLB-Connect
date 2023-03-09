import React from "react";

function GameInstructions({setBackground}) {
  setBackground("App-background6") 
  return (
    <div>
      <h2>How to Play the Game</h2>
      
      <div>Welcome to MLB Connect, an exciting and challenging MLB trivia game. Each game commences with a 4x4 grid containing logos of six MLB teams on the top and leftmost cells. The objective of the game is to correctly identify a player who has played on both the matching top and side teams. Input your guess in the corresponding cell and exit the cell to check your answer. A green background in the cell indicates a correct answer, yellow signifies the player has played for one but not both teams, while red indicates that the player did not play for either team. </div>
<div>For a live playthrough, please refer to the video below. </div>
<h4>Good Luck!</h4>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SDTRl4QM974" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
    </div>
  );
}

export default GameInstructions;