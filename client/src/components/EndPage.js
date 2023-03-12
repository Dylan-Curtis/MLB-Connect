import { useNavigate } from "react-router-dom";
import  { RetryContext }  from './Context/RetryContext.js'
import React, {  useContext } from 'react'

function EndPage({ setBackground}) {
  const navigate = useNavigate();
  const {stat} = useContext(RetryContext)
  setBackground("App-background5")
  return (
    <div className ="user-div">
     <div class="title">{stat.time > 0 ? "Thats a Good Piece of Thinkin'" : "Oh No! Better Luck Next Time"}</div> 
        <div className = "button-container">  
                  You got it in {stat.time}
          <button className="retry"  onClick={() => navigate("/")}>Retry</button>
          <button className= "go-back" onClick={() => navigate("/stats")}>See Stats</button>
        </div>
      
    </div>
  );
}

export default EndPage;