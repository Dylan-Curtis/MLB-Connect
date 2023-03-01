import {useState, useEffect} from 'react'
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
function handleSubmit (){
console.log("submit");
}

 return (
          <>        
            <form onSubmit={handleSubmit} class= "form">                          
                <div>
                <input
                  type="text"
                  id="cellOne"
                  autoComplete="off"
                  class="input-container"
                  value={cellOne}
                  onChange={(e) => setCellOne(e.target.value)}
                />  

                <input
                  type="text"
                  id="cellTwo"
                  autoComplete="off"
                  class="input-container"
                  value={cellTwo}
                  onChange={(e) => setCellTwo(e.target.value)}
                />  
                <input
                  type="text"
                  id="cellThree"
                  autoComplete="off"
                  class="input-container"
                  value={cellThree}
                  onChange={(e) => setCellThree(e.target.value)}
                />  
              </div>
              <div>
                <input
                  type="text"
                  id="cellFour"
                  autoComplete="off"
                  class="input-container"
                  value={cellFour}
                  onChange={(e) => setCellFour(e.target.value)}
                /> 
                <input
                  type="text"
                  id="cellFive"
                  autoComplete="off"
                  class="input-container"
                  value={cellFive}
                  onChange={(e) => setCellFive(e.target.value)}
                /> 
                 <input
                  type="text"
                  id="cellSix"
                  autoComplete="off"
                  class="input-container"
                  value={cellSix}
                  onChange={(e) => setCellSix(e.target.value)}
                /> </div>
                 <input
                  type="text"
                  id="cellSeven"
                  autoComplete="off"
                  class="input-container"
                  value={cellSeven}
                  onChange={(e) => setCellSeven(e.target.value)}
                /> 
                <input
                  type="text"
                  id="cellEight"
                  autoComplete="off"
                  class="input-container"
                  value={cellEight}
                  onChange={(e) => setCellEight(e.target.value)}
                /> 
                <input
                  type="text"
                  id="cellNine"
                  autoComplete="off"
                  class="input-container"
                  value={cellNine}
                  onChange={(e) => setCellNine(e.target.value)}
                /> 
            </form>
            </>
          );
        }        
        export default GameContainer;