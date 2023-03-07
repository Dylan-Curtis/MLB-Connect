import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Timer( {game, user, gameOver, setGameOver}) {
  
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate()
 
  function PostScore(){

  const totalSeconds = (minutes * 60) + seconds;
        const timeFloat = totalSeconds / 60;
        const scoreData ={
          game: (game[0].game),
          user: (user.user),        
          time: timeFloat
        } 
        
        fetch(`/newstat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(scoreData)
      })
      .then((r) => {
        if (r.status === 201){
         r.json()
        //  .then(userOBJ=> {
        //  setUser(userOBJ)  
         navigate("/stats");     
        //  })
        }
        else {
         r.json()
         .then(error=>  console.log(error.errors))
         navigate("/stats");  }
       })}

       if(gameOver){
        PostScore()
       }


  useEffect(() => {   

    const interval = setInterval(() => {
     
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else {
        clearInterval(interval);
        // post fetch call
        // PostScore()
        setGameOver(true)
       }; 
      
  }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds, gameOver]);

  return (
    <div class='cell'>
      {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
    </div>
  );
}
export default Timer;