import { useNavigate } from 'react-router-dom'

function DeleteUser({ user, setBackground }) {

  const navigate = useNavigate();
  setBackground("App-background2") 

  const handleDeleteUser = (e) => {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.status === 204) {
        navigate(`/signup`)
      }
    });
  };

  function goBack() {
    navigate(`/stats`)
  }

  return (
    <div className="form">          
    <label >Are You Sure?</label>
    <div><label className="subtitle">This Action Cannot Be Undone</label></div>
    <div class = "button-container">
    <button class="submit" onClick={handleDeleteUser}>Yes</button> 
    <button class="go-back" onClick={ goBack }>No, Go Back</button> </div>                 
</div> 
  );
}

export default DeleteUser;
