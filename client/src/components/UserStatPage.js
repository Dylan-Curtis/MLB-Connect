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
    <div>
 <Timer/>
    </div>
)
}
export default UserStatPage