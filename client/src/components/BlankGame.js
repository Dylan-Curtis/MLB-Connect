function BlankGame( { setStartGame }){

    function startGame(){
        setStartGame(true);
    }

 return (
          <div >               
            <form  class= "game-form">    
           <div className="start-game" onClick={startGame}> Click Here To Start </div> 
           <div className="cell"></div> 
           <div className="cell"></div> 
           <div className="cell"></div> 
           <div className="cell"></div> 
            <div><input
                  type="text"
                  id="cellOne"
                  autoComplete="off"
                  className="cell"
                 /> </div>  

                <div> <input
                  type="text"
                  id="cellTwo"
                  autoComplete="off"
                  class="cell"
                /></div>   
                
                <div><input
                  type="text"
                  id="cellThree"
                  autoComplete="off"
                  class="cell"
                  /> </div>  
              <div  class='cell'></div>
              <div><input
                  type="text"
                  id="cellFour"
                  autoComplete="off"
                  class="cell"
                 
                /></div>   
                <div><input
                  type="text"
                  id="cellFive"
                  autoComplete="off"
                  class="cell"
                /> </div>   
                 <div><input
                  type="text"
                  id="cellSix"
                  autoComplete="off"
                  class="cell"
                 /> </div>
                <div class='cell'></div>                
                 <input
                  type="text"
                  id="cellSeven"
                  autoComplete="off"
                  class="cell"
                /> 
                <input
                  type="text"
                  id="cellEight"
                  autoComplete="off"
                  class="cell"                  
                /> 
                <input
                  type="text"
                  id="cellNine"
                  autoComplete="off"
                  class="cell"                   
                /> 
            </form>
            </div>
          );
        }        
        export default BlankGame;