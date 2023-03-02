
import GameContainer from './GameContainer'
import SignupForm from './SignupForm'

function Dashboard({user,setUser,errors,setErrors}) { 
 

    return(
        <div>
          { user ? <GameContainer/>:
          <SignupForm setUser={setUser} errors = {errors} setErrors={setErrors} user={user} />
          }
        </div>
)}
export default Dashboard