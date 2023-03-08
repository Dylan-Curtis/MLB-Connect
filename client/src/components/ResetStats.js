
function ResetStats({setStats}) { 
    function handleClick(e) {
        e.preventDefault()
        fetch(`/stats}`, {
        method: 'DELETE'
    })
    .then(r => {
        if(r.status === 204){
            setStats(null)} 
        })
      }

    return (
        <div className="form">          
            <label >Are You Sure?</label>
            <button onClick={handleClick}></button>  
            <button class="submit" type="submit">Submit</button>
        </div>
            
            )
}

 export default ResetStats