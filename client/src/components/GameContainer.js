import {useState, useEffect} from 'react'
import Timer from './Timer'

function GameContainer(){
    const [cellOne, setCellOne] = useState("");
    const [cellTwo, setCellTwo] = useState("");
    const [cellThree, setCellThree] = useState("");

    const [cellFour, setCellFour] = useState("");
    const [cellFive, setCellFive] = useState("");
    const [cellSix, setCellSix] = useState("");

    const [cellSeven, setCellSeven] = useState("");
    const [cellEight, setCellEight] = useState("");
    const [cellNine, setCellNine] = useState("");

    const [game, setGame] = useState({});
function handleSubmit (){
console.log("submit");
}

  useEffect(() => {
    async function fetchGame() {
      const today = new Date().toISOString().slice(0, 10);
      console.log(today)  
      const response = await fetch(`/games/${today}`);
      const data = await response.json();
      console.log(data)      
      setGame(data);
    } 

// setErrors(error.error)


if(Object.keys(game).length === 0 ){
  fetchGame()}

},[game])


if (Object.keys(game).length === 0) return <div>Loading</div>

 return (
          <>        
            <form onSubmit={handleSubmit} class= "game-form">    
           <span> 
                  <Timer/>
                  <img class='img' src={game.team1.logo} alt={game.team1.name}></img>
                  <img class='img' src={game.team2.logo} alt={game.team2.name}></img>
                  <img class='img' src={game.team3.logo} alt={game.team3.name}></img>   
           </span>                   
                <div>                  
                  <img class='img' src={game.team4.logo} alt={game.team4.name}></img>
                <input
                  type="text"
                  id="cellOne"
                  autoComplete="off"
                  class="cell"
                  value={cellOne}
                  onChange={(e) => setCellOne(e.target.value)}
                />  

                <input
                  type="text"
                  id="cellTwo"
                  autoComplete="off"
                  class="cell"
                  value={cellTwo}
                  onChange={(e) => setCellTwo(e.target.value)}
                />  
                
                <input
                  type="text"
                  id="cellThree"
                  autoComplete="off"
                  class="cell"
                  value={cellThree}
                  onChange={(e) => setCellThree(e.target.value)}
                />  
              </div>
              
              <div>
              <img class='img' src={game.team5.logo} alt={game.team5.name}></img>
                <input
                  type="text"
                  id="cellFour"
                  autoComplete="off"
                  class="cell"
                  value={cellFour}
                  onChange={(e) => setCellFour(e.target.value)}
                /> 
                <input
                  type="text"
                  id="cellFive"
                  autoComplete="off"
                  class="cell"
                  value={cellFive}
                  onChange={(e) => setCellFive(e.target.value)}
                /> 
                 <input
                  type="text"
                  id="cellSix"
                  autoComplete="off"
                  class="cell"
                  value={cellSix}
                  onChange={(e) => setCellSix(e.target.value)}
                /> </div>
                <img class='img' src={game.team6.logo} alt={game.team6.name}></img>                
                 <input
                  type="text"
                  id="cellSeven"
                  autoComplete="off"
                  class="cell"
                  value={cellSeven}
                  onChange={(e) => setCellSeven(e.target.value)}
                /> 
                <input
                  type="text"
                  id="cellEight"
                  autoComplete="off"
                  class="cell"
                  value={cellEight}
                  onChange={(e) => setCellEight(e.target.value)}
                /> 
                <input
                  type="text"
                  id="cellNine"
                  autoComplete="off"
                  class="cell"
                  value={cellNine}
                  onChange={(e) => setCellNine(e.target.value)}
                /> 
            </form>
            </>
          );
        }        
        export default GameContainer;