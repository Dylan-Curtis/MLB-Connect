import { useNavigate } from 'react-router-dom'

function ResetStats({ setBackground, user}) { 
    const navigate = useNavigate();
    setBackground("App-background2") 
    function handleClick(e) {        
        e.preventDefault()
        fetch(`/scores/${user.id}`, {
        method: 'DELETE'
    })
    .then(r => {
        if(r.status === 204){
            } 
            navigate(`/stats`)
        })
      }

      function goBack() {
        navigate(`/stats`)
      }

    return (
        <div className="form">          
            <label >Are You Sure?</label>
            <div class = "button-container">
            <button class="confermation" onClick={ handleClick }>Yes</button>    
            <button class="go-back" onClick={ goBack }>No, Go Back</button>      
            </div>    
        </div>            
            )
}

 export default ResetStats