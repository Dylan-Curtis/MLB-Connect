import React, { useRef } from 'react';
import {FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'



const Navbar = ({user, setUser}) => {
    const navRef = useRef()
    const navigate = useNavigate()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    const logout =( e)=>{
      e.preventDefault()
      fetch('/logout', {
      method: 'DELETE'
  })
  .then(r => {
      if(r.status === 204){
          setUser(null)}
          else{
   const error = r.json()
   console.log(error.error)
      // setErrors(error.error)
          }
      })
  }

    return (
        <header class="navBar">
            <h3 onClick={() =>  navigate('/')}>MLB Connect</h3>
            <nav ref={navRef}>
            { user ? <h1 className= "userInfoHeader">Hello, {user.name}</h1>: <div><Link to="login" ><button class = "logInButton">Login</button></Link> <Link to="signup"><button className = "signupButton">Sign Up</button></Link> </div>}

                <a href='/characters'>How to Play</a>
                <a href='/stats'>Stats</a>           
                {user ? <a href='/stats' onClick={logout}>Logout</a>: ""}  
                
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
               
            </button>
        </header>
    );
}

export default Navbar;