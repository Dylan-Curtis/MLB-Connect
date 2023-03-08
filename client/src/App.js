import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import {useEffect, useState} from 'react'
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import UserStatPage from './components/UserStatPage'
import GameInstructions from './components/GameInstructions'
import EditUser from './components/EditUser'
import ResetStats from './components/ResetStats';

function App() {
  // const [showNavBar, setShowNavBar] = useState(false)
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([]);
  const [background, setBackground] = useState("App-Header")
 
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
console.log(user)
// setErrors(error.error)
}
    }
    if(!user){
    fetchUser()}
  },[user, setErrors, setUser])

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <header className={background}>    
        <Routes>
           <Route path="/" element={<Dashboard user={user} setUser={setUser}  errors = {errors} setErrors={setErrors} setBackground={setBackground}/> } />
           <Route path="/signup" element= {<SignupForm onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser} setBackground={setBackground}/>} />
           <Route path="/login" element= {<LoginForm onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser} setBackground={setBackground}/>} /> 
           <Route path="/edit-user" element= {<EditUser onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser} setBackground={setBackground}/>} /> 
           <Route path= "/stats" element= {<UserStatPage  errors = {errors} setErrors={setErrors} user={user} setBackground={setBackground} />}   />   
           <Route path= "/game-instructions" element= {<GameInstructions setBackground={setBackground}/>} />      
           <Route path= "/reset-stats" element= {<ResetStats setBackground={setBackground}/>} />        
        </Routes>
           
      </header>
    </div>
  );

}

export default App