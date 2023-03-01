
import GameContainer from './GameContainer'
import SignupForm from './SignupForm'

function Dashboard({user,setUser,errors,setErrors}) {
 
 
  if (!user) return  <div><SignupForm setUser={setUser} errors = {errors} setErrors={setErrors} user={user} /> </div>

    return(
        <div>
          <GameContainer/>
        </div>
)}
export default Dashboard