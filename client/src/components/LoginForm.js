import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

function LoginForm({ onLogin, setErrors, errors, setBackground }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    setBackground("App-background4")  
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();       
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }).then((r) => {           
            if (r.status === 200) {
              r.json().then((user) => onLogin(user));
              navigate("/");   
            } else {
              r.json().then((err) => setErrors([err.error]));
            }
          });
        }
        return (
          <>        
            <form onSubmit={handleSubmit} class= "form">           
              <div class="title">Welcome Back!</div>             
                
                <input
                  type="text"
                  id="email"
                  autoComplete="off"
                  class="input-container"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />             
             
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  class="input-container"
                  autoComplete="current-password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />                       
             
                {errors && errors.map((err) => (
                    <p key={err} style={{ color: "red" }}>
                    {err}
                    </p>
                ))}
                
                <button type="submit" class="submit">Submit</button>
                <div class="subtitle">Don't Have an Account?<Link class= 'link' to="/signup"> Sign Up!</Link></div>
            </form>
            </>
          );
        }
        
        export default LoginForm;