import { useState } from "react";
function EditUser({ onLogin, setErrors, user,setBackground }) { 

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

    return (
        <form onSubmit={handleSubmit} className="form">    
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
           
            <button class="submit" type="submit">Submit</button>
        </form>
            
            )
}

 export default EditUser