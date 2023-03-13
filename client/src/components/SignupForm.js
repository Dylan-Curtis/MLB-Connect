import { useState, useContext } from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { BackgroundContext } from './Context/BackgroundContext';


function SignupForm({ onLogin, errors, setErrors }) {
    const [password, setPassword] = useState("");  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();    
    const {setBackground} = useContext(BackgroundContext)
    setBackground("App-background4") 
    function handleSubmit(e) {
        e.preventDefault(); 
        const userData ={
          name,
          password,         
          email
        }
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
        .then((r) => {
         if (r.status === 201){
          r.json()
          .then(userOBJ=> {
          onLogin(userOBJ)  
          navigate("/");     
          })
         }
         else {
          r.json().then((err) => setErrors([err.error]));
        }
        })
        };      

    return (
        <form onSubmit={handleSubmit} class= "form">
        <div class="title">Join the fun!</div>       
            <label htmlFor="name"></label>
            <input
            placeholder="User Name"
            class="input-container"
              type="text"            
              name="name"        
              value={name}
              onChange={(e) => setName(e.target.value)}
            />          
            <label htmlFor="password"></label>
            <input
            placeholder="Password"
            class="input-container"
              type="password"
              name="password"

              value={password}
              onChange={(e) => setPassword(e.target.value)}             
            />
             <label htmlFor="email"></label>
             <input
             placeholder="Email Address"
             class="input-container"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}             
            />    
            {errors && errors.map((err) => (
                    <p key={err} style={{ color: "red" }}>
                    {err}
                    </p> 
            ))}
            <button type="submit" class="submit" >Submit</button>
            <div class="subtitle">Have An Account Already? <Link class= 'link' to="/login"> Log In!</Link></div>
        </form>
            
            )
}
 export default SignupForm