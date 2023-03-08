
import GameContainer from './GameContainer'
import SignupForm from './SignupForm'

function Dashboard({user,setUser,errors,setErrors, setBackground}) { 
  setBackground("App-background5")  

    return(
        <div>
          { user ? <GameContainer user={user}/>:
          <SignupForm setUser={setUser} errors = {errors} setErrors={setErrors} user={user} />
          }
        </div>
)}
export default Dashboard