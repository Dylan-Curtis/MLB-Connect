import { useNavigate } from "react-router-dom";
import  { RetryContext }  from './Context/RetryContext.js'
import React, {  useContext } from 'react'

function EndPage({ setBackground}) {
  const navigate = useNavigate();
  const {stat, setRetry} = useContext(RetryContext)
  const minutes = stat.time;
  const formattedTime = formatTime(minutes);
  function formatTime(time) {
    const minutes = Math.floor(time);
    const seconds = Math.floor((time - minutes) * 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  function handleRetry(){
    setRetry(true)
    navigate("/")
  }
  setBackground("App-background5")
  return (
    <div className ="user-div">
     <div class="title">{stat.time > 0 ? "Thats a Good Piece of Thinkin'" : "Oh No! Better Luck Next Time"}</div> 
     You got it with {formattedTime} remaining!
        <div className = "button-container">  
                  
          <button className="retry"  onClick={() =>handleRetry()}>Retry</button>
          <button className= "go-back" onClick={() => navigate("/stats")}>See Stats</button>
        </div>
      
    </div>
  );
}

export default EndPage;