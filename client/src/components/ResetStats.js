import { useNavigate } from 'react-router-dom'

function ResetStats({setStats, setBackground}) { 
    const navigate = useNavigate();
    setBackground("App-background2") 
    function handleClick(e) {        
        e.preventDefault()
        fetch(`/scores`, {
        method: 'DELETE'
    })
    .then(r => {
        if(r.status === 204){
            setStats({})} 
            navigate(`/stats`)
        })
      }

      function goBack() {
        navigate(`/stats`)
      }

    return (
        <div className="form">          
            <label >Are You Sure?</label>
            <button class="submit" onClick={ handleClick }>Yes</button>    
            <button class="go-back" onClick={ goBack }>No, Go Back</button>          
        </div>            
            )
}

 export default ResetStats