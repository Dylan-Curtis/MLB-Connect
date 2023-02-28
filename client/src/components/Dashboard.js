import {useEffect, useState} from 'react'
import GameContainer from './GameContainer'

function Dashboard() {
  const [showNavBar, setShowNavBar] = useState(false)
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([]);
 
  useEffect(()=> {
    const fetchUser = async () =>{        
      const response = await fetch('authorized_user')
      if (response.ok){
      const user = await response.json() 
      setUser(user)
    }
else{
const error = response.json()
console.log(error.error)
// setErrors(error.error)
}
    }
    if(!user){
    fetchUser()}
  },[user, setErrors, setUser])

    return(
        <div>
          <GameContainer/>
        </div>
)}
export default Dashboard