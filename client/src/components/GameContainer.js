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

    const [team1Players, setTeam1Players] = useState({});
    // const [team2Players, setTeam2Players] = useState({});
    // const [team3Players, setTeam3Players] = useState({});

    // const [team4Players, setTeam4Players] = useState({});
    // const [team5Players, setTeam5Players] = useState({});
    // const [team6Players, setTeam6Players] = useState({});
// function handleSubmit (){
// console.log("submit");
// }

  useEffect(() => {
    async function fetchGame() {
      const today = new Date().toISOString().slice(0, 10);
      debugger
      // console.log(today)  
      const response = await fetch(`/games/${today}`);
      const data = await response.json();
      // console.log(data)      
      setGame(data);
    } 

// setErrors(error.error)


if(Object.keys(game).length === 0 ){
  fetchGame()}

},[game])

useEffect(() => {
  async function fetchTeam1Players() {    
    // const team1Id = game["team1"]["id"]
    // console.log(team1Id)
    const response = await fetch(`/teams/${1}`);
    const players = await response.json();
    console.log(players)      
    setTeam1Players(players);
    console.log(team1Players)
  } 

// setErrors(error.error)


if(Object.keys(team1Players).length === 0 && Object.keys(game).length !== 0){
  fetchTeam1Players()}

},[game])



if (Object.keys(game).length === 0) return <div>Loading</div>

 return (
          <>   
              {/* add "done button" */}
            <form  class= "game-form">    
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