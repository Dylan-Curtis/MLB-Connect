import React, { useRef } from 'react';
// import {FaBars, FaTimes } from 'react-icons/fa'
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
          setUser(null)}
          else{
   const error = r.json()
   console.log(error.error)
      // setErrors(error.error)
          }
      })
  }

    return (
        <header>
            <h3 
            onClick={() =>  navigate('/')}
            >MLB Connect</h3>
            <nav ref={navRef}>
                <a href='/user'>User</a>
                <a href='/characters'>How to Play</a>
                <a href='/stats'>Stats</a>           
                <a href='/stats' onClick={logout}>Logout</a>  
                
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    {/* <FaTimes /> */}
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                {/* <FaBars /> */}
            </button>
        </header>
    );
}

export default Navbar;