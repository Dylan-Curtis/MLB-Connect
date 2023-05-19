import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function LoginForm({ onLogin, setErrors, errors, setBackground }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const google = window.google;
  setBackground('App-background4');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.status === 200) {
        r.json().then((user) => onLogin(user));
        navigate('/');
      } else {
        r.json().then((err) => setErrors([err.error]));
      }
    });
  }

  const oauth = (userObject, navigate) => {
    
    fetch('/oauth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    }).then((resp) => {
      if (resp.status === 201) {
        resp.json().then((data) => {
          onLogin(data);
         
        });
      }
    });
  };
  
    
    const handleCallBackResponse = (response) => {
      console.log('jwt token' + response.credential);
      const userObject = jwt_decode(response.credential);
      console.log(userObject);
      if (userObject !== {}) {
        oauth(userObject);
        navigate('/')
      }
    };

    useEffect(() => {
      /* global google*/
      google.accounts.id.initialize({
        client_id: '611735999133-91k8aa6jl0ekai3tumsdfqachphud4r6.apps.googleusercontent.com',
        callback: handleCallBackResponse,
      });

      google.accounts.id.renderButton(document.getElementById('signInDiv'), { theme: 'outline', size: 'large' });
    }, []);

    return (
      <>
        <form onSubmit={handleSubmit} class="form">
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

          {errors &&
            errors.map((err) => (
              <p key={err} style={{ color: 'red' }}>
                {err}
              </p>
            ))}

          <button type="submit" class="submit">
            Submit
          </button>
          <div id='signInDiv' ></div>
          
          <div class="subtitle">
            Don't Have an Account?<Link class="link" to="/signup">
            
              Sign Up!
            </Link>
          </div>
        </form>
      </>
    );
  };

 


export default LoginForm;