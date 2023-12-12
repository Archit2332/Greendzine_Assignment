import React from 'react';
import  { useState } from 'react';

import Login  from './assets/login';
import Dashboard from './assets/dashboard';
import Finalpage from './assets/final';






function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showFinalpage, setShowFinalpage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const handleLogin = () => {

    setLoggedIn(true);

  };
  const handleUserIconClick = () => {
    setShowFinalpage(false);
   
  };
  const handleHouseIconClick=() => {
    setShowFinalpage(true);
  };
  

 

  return (

    <div>
      {!loggedIn && <Login onLogin={handleLogin} />}
      {loggedIn && !showFinalpage && <Dashboard onUserIconClick={handleUserIconClick} />}
      {showFinalpage && (
        <Finalpage
          handleHouseIconClick={handleHouseIconClick}


        />
      )}
    </div>
   

  );
}





export default App;

