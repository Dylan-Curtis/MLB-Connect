import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import {useEffect, useState} from 'react'

function App() {
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
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">    
        <Routes>
           <Route path="/" element={<Dashboard/> } />
        </Routes>     
      </header>
    </div>
  );
}

export default App;
