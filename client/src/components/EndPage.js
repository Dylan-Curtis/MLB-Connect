import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function EndPage({ stat}) {
  const navigate = useNavigate();

  return (
    <div class="stats-container">
     
        <div>          
          <button onClick={() => navigate("/game")}>Retry</button>
          <button onClick={() => navigate("/stats")}>See Stats</button>
        </div>
      
    </div>
  );
}

export default EndPage;