import { useState, useEffect } from "react";


function UserStatPage({user}) {
  console.log(user)
    const [stats, setStats] = useState({});     
useEffect(() => {
    async function fetchStats() {
      const response = await fetch(`/scores`);
      const stats = await response.json();  
      console.log(stats)      
      setStats(stats);
    }
if(Object.keys(stats).length === 0 ){
  fetchStats()}

// const userOptions = user ? <span>{user.name}Edit Account Reset Stats </span>: ""

},[stats])
return(
  <div>
    { user ? 
    <div>
    {user.name}
    Edit Account 
    Reset Stats</div> : ""}
    <span className ="stats-div"> 
      <div className ="stat-div">
      {stats.win_percentage}
      Win Percentage
      </div>
      <div className ="stat-div">
      {stats.total_wins} 
      Total Wins
      </div>
    </span>
    </div>
)
}
export default UserStatPage