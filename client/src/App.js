import {useEffect, useState, useContext} from 'react'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import './index.css';
import './App.css';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import UserStatPage from './components/UserStatPage'
import GameInstructions from './components/GameInstructions'
import EditUser from './components/EditUser'
import ResetStats from './components/ResetStats';
import DeleteUser from './components/DeleteUser'
import EndPage from './components/EndPage'
import { BackgroundContext } from './components/Context/BackgroundContext';


function App() {

  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([]);
  const {background, setBackground} = useContext(BackgroundContext)
 
  useEffect(()=> {
    const fetchUser = async () =>{        
      const response = await fetch('authorized_user')
      if (response.ok){
      const user = await response.json() 
      setUser(user)
    }}

    if(!user){
    fetchUser()}
  },[])

  
  // useEffect(()=>{ 
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id:"611735999133-91k8aa6jl0ekai3tumsdfqachphud4r6.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   })
  //   // google.accounts.id.renderButton(
  //   //   document.getElemantById("logIn"),
  //   //   {theme: "outline", size: 'large'}
  //   // )
  // },[])


  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <header className={background}>    
        <Routes>
           <Route path="/" element={<Dashboard user={user} setUser={setUser}  errors = {errors} setErrors={setErrors} setBackground={setBackground}/> } />
           <Route path="/signup" element= {<SignupForm onLogin={setUser} errors = {errors} setErrors={setErrors} user={user}  setBackground={setBackground}/>} />
           <Route path="/login" element= {<LoginForm id="login" onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setBackground={setBackground}/>} /> 
           <Route path="/edit-user" element= {<EditUser onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser} setBackground={setBackground}/>} /> 
           <Route path= "/stats" element= {<UserStatPage  errors = {errors} setErrors={setErrors} user={user} setBackground={setBackground} />} />   
           <Route path= "/game-instructions" element= {<GameInstructions setBackground={setBackground}/>} />      
           <Route path= "/reset-stats" element= {<ResetStats setBackground={setBackground} user={user}/>} />    
           <Route path= "/delete-user" element= {<DeleteUser setBackground={setBackground} user={user} setUser = {setUser} errors = {errors}/>} /> 
           <Route path= "/end-page" element= {<EndPage setBackground={setBackground}/>} />      
        </Routes>           
      </header>
    </div>
  );

}

export default App