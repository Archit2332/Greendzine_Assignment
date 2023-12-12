import React from 'react';
import  { useState } from 'react';



function Login({onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the email and password to the parent component
    if (email === 'architg2303@gmail.com' && password === '12345') {
      // If they match, call the onLogin function or perform the necessary actions
      setIsLoggedIn(true);
      onLogin(email, password);
      // Clear input fields after submission
      setEmail('');
      setPassword('');
    } else {
      // If they don't match, handle the invalid credentials case
      alert('Invalid email or password. Please try again.');
      // Optionally, you might want to handle this differently (e.g., show an error message)
    }
  };


 
  return (
    <div>
    {isLoggedIn ? (
      // If isLoggedIn is true, render the Dashboard component
      <Dashboard />
    ) : (
      // If isLoggedIn is false, render the login form
    <div className="loginContainer">
      <div className="loginBackground"></div>
      <div className="time">11:30</div>
      <img src='./img/Group 3/Group 3.png' alt="Logo" className="logo" />
      <div className="textBox">
        #WeAreElectric
      </div>

      <input
        type="text"
        id='input'
        placeholder='E-mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
 <input
        type="text"
        id='input2'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />


<div className="button" onClick={handleSubmit}>
        <p id='b'>Login</p>
      </div>
      <div className="forgetpassword">
        Forgot Password?
      </div> 


     

    </div>
     )}
     </div>




  );
  }

export default Login;
