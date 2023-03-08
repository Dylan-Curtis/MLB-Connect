import { useState } from "react";

function UserComponent({ user }) {
  const [deletedUser, setDeletedUser] = useState(null);

  const handleDeleteUser = (e) => {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.status === 204) {
        
      }
    });
  };

  return (
    <div className="form">          
    <label >Are You Sure?</label>
    <button class="submit" onClick={handleDeleteUser}>Yes</button>             
</div> 
  );
}

export default UserComponent;
