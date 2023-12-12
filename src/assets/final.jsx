import React from 'react';


function Finalpage({handleHouseIconClick}){
  const goBackToDashboard = () => {
    if (typeof handleHouseIconClick === 'function') {
      handleHouseIconClick();
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

<div className="productivitybar"><input type="text"  id='ab' placeholder='Search With Name' /></div>


<div className="empid1">
   <p className='id1'>
    EMP ID :1
    </p>
    <p className='name1'>
    Name   :Arjun
    </p>
   
    <p className='dob'>
     DOB   :16-11-2000
    </p>
   
    <p className='role'>
      Role :Software Engineer
   </p>
</div>

<div className="empid2">
  <p className='id2'>
    EMP ID :2
    </p>
    <p className='name2'>
    Name   :Mahesh
    </p>
    <p className='dob'>
    DOB    :15-01-2000
    </p>
    <p className='role'>
    Role   :Web Developer
   </p>
</div>
<div>


<i className="fa-solid fa-house" onClick={goBackToDashboard}></i>
<i class="fa-solid fa-user"></i>
</div>

</div>

    );
}
export default Finalpage;