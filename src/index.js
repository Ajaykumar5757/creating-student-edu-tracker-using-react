import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope,faBook,faPerson,
  faPeopleGroup,faFile,faLandmark,faHospital,
  faTruck,faCoins,faPercent,faQuestion,
  faGear,faArrowRightFromBracket,faCircleUp} from '@fortawesome/free-solid-svg-icons'; 

import logo from './images/logo-college.png';

function StudentManagement() {
  const [regular, setRegular] = useState(8);
  const [remedial, setRemedial] = useState(13);
  const [others, setOthers] = useState(0);

  return (
    <div class="main-content">
      <div class="first-division">
        <div class="college-logo">
          <img src={logo} alt="logo" width="120px" height="150px"/>
        </div>
        <div class="management-content">
         <FontAwesomeIcon icon={faPeopleGroup} style={{width:"40px",height:"40px"}}/>
          <h1>Student Management</h1>
        </div>
        <div class="management-content">
        <FontAwesomeIcon icon={faCoins} style={{width:"40px",height:"40px"}}/>
          <h1>Finanacial Management</h1>
        </div>
        <div class="management-content">
        <FontAwesomeIcon icon={faPercent} style={{width:"40px",height:"40px"}}/>
          <h1>Quality control</h1>
        </div>
        <div class="management-content">
          <FontAwesomeIcon icon={faTruck} style={{width:"40px",height:"40px"}}/>
          <h1>Report Delivery</h1>
        </div>
        <div class="management-content">
         <FontAwesomeIcon icon={faFile} style={{width:"40px",height:"40px"}}/>
          <h1>Attendence</h1>
        </div>
        <div class="management-content">
         <FontAwesomeIcon icon={faQuestion} style={{width:"20px",height:"20px",margin:"5px"}}/>
         <FontAwesomeIcon icon={faGear} style={{width:"20px",height:"20px",margin:"5px"}}/>
         <FontAwesomeIcon icon={faArrowRightFromBracket} style={{width:"20px",height:"20px",margin:"5px"}}/>
        </div>
      </div>
      <div class="second-division">
        <h1 class="topic">Student Management</h1>
        <div class="count-content">
          <div class="regular-content">
            <FontAwesomeIcon icon={faUser} style={{width:"80px",height:"80px"}}/>
            <h2>{regular}</h2>
            <h1>Regular students</h1>
          </div>
          <div class="remedial-content">
          <FontAwesomeIcon icon={faUser} style={{width:"80px",height:"80px"}}/>
            <h2>{remedial}</h2>
            <h1>Remidial Students</h1>
          </div>
          <div class="other-content">
          <FontAwesomeIcon icon={faCircleUp} style={{width:"80px",height:"80px"}}/>
          <h2>{others}</h2>
          <h1>In Food Club</h1>
          </div>
        </div>
        <h3 class="menu-topic">Menu</h3>
        <div class="menu-content">
          <div class="menu-content-profile">
            <FontAwesomeIcon icon={faUser} style={{color: "#3960fe",width:"50px",height:"50px"}}/>
            <h1>Regular Enrollment</h1>
          </div>
          <div class="menu-content-profile">
            <FontAwesomeIcon icon={faBook} rotation={8} style={{color: "#3960fe",width:"50px",height:"50px"}} />
            <h1>Remedial Enrollment</h1>
          </div>
          <div class="menu-content-profile">
            <FontAwesomeIcon icon={faPerson} style={{color: "#3960fe",width:"50px",height:"50px"}}/>
            <h1>Club Management</h1>
          </div>
          <div class="menu-content-profile">
            <FontAwesomeIcon icon={faLandmark} style={{color: "#3960fe",width:"50px",height:"50px"}}/>
            <h1>Classroom Management</h1>
          </div>
          <div class="menu-content-profile">
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#3960fe",width:"50px",height:"50px"}} />
            <h1>SMS/EMAIL</h1>
          </div>
          <div class="menu-content-profile">
            <FontAwesomeIcon icon={faFile} style={{color: "#3960fe",width:"50px",height:"50px"}}/>
            <h1>Attendence</h1>
          </div>
          <div class="menu-content-profile">
            <FontAwesomeIcon icon={faHospital} style={{color: "#3960fe",width:"50px",height:"50px"}}/>
            <h1>Clinic</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<StudentManagement />, document.getElementById('root'));
