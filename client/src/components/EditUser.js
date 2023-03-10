import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

function EditUser({ onLogin, setErrors, user,setBackground }) { 
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    setBackground("App-background2")  
    function handleSubmit(e) {
      
        e.preventDefault();        
        fetch(`/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name, 
            email                    
          }),
        }).then((r) => {
         
          if (r.ok) {
            r.json().then((user) =>  onLogin(user));
          } else {
            
            r.json().then((err) =>
            console.log(err.error));
            //  setErrors(err.error));
          }
        });
      }
      function goBack() {
        navigate(`/stats`)
      }

    return (
        <form onSubmit={handleSubmit} className="form">  
        <label >Time To Rebrand?</label>  
            <input
              class="input-container"
              type="text"
              id="name"
              autoComplete="off"
              placeholder="New Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />   
            <input
              class="input-container"
              type="text"
              id="email"
              autoComplete="off"
              placeholder="New Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />         
           <div className = "button-container">
            <button class="confermation" type="submit">Submit</button>
            <button class="go-back" onClick={ goBack }>No, Go Back</button> </div>
            <div class="subtitle">Want a Fresh Start?<Link class= 'link' to="/delete-user"> Delete Profile</Link></div>     
        </form>
            
            )
}

 export default EditUser