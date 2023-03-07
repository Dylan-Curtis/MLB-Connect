import { useState, useEffect } from "react";
import Timer from './Timer'

function UserStatPage({ user }) {
    const [stats, setStats] = useState({});  
useEffect(() => {
    async function fetchStats() {
      
      
      const response = await fetch(`/scores`);
      const data = await response.json();
      console.log(data)      
      setStats(data);
    } 

if(Object.keys(stats).length === 0 ){
  fetchStats()}

},[stats])
return(
    <span className ="stats-div">
      <span>
      <div className ="stat-div">
        Current Streak
      </div>
      <div className ="stat-div">
        Max Streak
      </div>
      </span>
<span>
      <div className ="stat-div">
      Win Percentage
      </div>
      <div className ="stat-div">
      Total Wins
      </div>
      </span>
 
    </span>
)
}
export default UserStatPage