import { useNavigate } from "react-router-dom";
import  RetryContext  from './Context/RetryContext.js'

function EndPage({ setBackground, stat}) {
  const navigate = useNavigate();
  
  setBackground("App-background5")
  return (
    <div className ="user-div">
     <div class="title">Game Over!</div> 
        <div className = "button-container">  
                  {/* {stat.time} */}
          <button className="retry"  onClick={() => navigate("/game")}>Retry</button>
          <button className= "go-back" onClick={() => navigate("/stats")}>See Stats</button>
        </div>
      
    </div>
  );
}

export default EndPage;