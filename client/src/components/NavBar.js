import React, { useRef } from 'react';
import {FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

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
          setUser(null)
          navigate('/')}
          else{
   const error = r.json()
   console.log(error.error)
      // setErrors(error.error)
          }
      })
  }

    return (
        <header class="navBar">
            <h3 onClick={() =>  navigate('/')} >MLB Connect</h3>
            <nav ref={navRef}>            

            <a href='/game-instructions'>How to Play</a> 
                {user ? <a href='/stats'>Stats</a>:""}           
                {user ? <a href='/stats' onClick={logout}>Logout</a>: <a href='/login'>Login</a> }  
                {user ?"":<a href='/signup'>Signup</a>}
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