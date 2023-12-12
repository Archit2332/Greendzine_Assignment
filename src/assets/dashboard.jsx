import React from 'react';
import Finalpage from './final';

import  { useState } from 'react'; 


function Dashboard({onUserIconClick}){
  const [showFinalpage, setShowFinalpage] = useState(false);
  const handleUserIconClick = () => {
    setShowFinalpage(true); 
    // onUserIconClick();
    if (typeof onUserIconClick === 'function') {
      onUserIconClick();
    }
  };
  
  return (

    <div className="loginContainer">
      <div className="loginBackground"></div>
      <div className="time">11:30</div>
      <img src='./img/Group 46/Group 46.png' alt="helpline" className="helplogo" />
      <img src='./img/moptro logo/moptro logo.png'  className="moptrologo" />
      <div className='circle'>
        4
      </div>

<div className="productivitybar"><p id='a'>Employee Productivity Dashboard</p></div>
<div className='ponmon'>Productivity on Monday</div>
<div className="ponmondata">4%</div>
<div className="ponmonbar"></div>

<div className='pontue'>Productivity on Tueday</div>
<div className="pontuedata">92%</div>
<div className="pontuebar"></div>

<div className='ponwed'>Productivity on Wednesday</div>
<div className="ponweddata">122%</div>
<div className="ponwedbar"></div>


<div className='ponthu'>Productivity on Thursday</div>
<div className="ponthudata">93%</div>
<div className="ponthubar"></div>

<div className='ponfri'>Productivity on Friday</div>
<div className="ponfridata">89%</div>
<div className="ponfrinbar"></div>



<div className='ponsat'>Productivity on Saturday</div>
<div className="ponsatdata">98%</div>
<div className="ponsatbar"></div>

<div>


<i class="fa-solid fa-house"></i>
<p onClick={handleUserIconClick}><i className="fa-solid fa-user"></i></p>
      {showFinalpage && <Finalpage handleHouseIconClick={() => setShowFinalpage(false)} />}

</div>
</div>








  );
}
export default Dashboard;