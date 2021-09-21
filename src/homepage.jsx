import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from '@aws-amplify/core';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import telemedicineLogo  from './images/telemedicineLogo2.png';
import userIcon from './images/userIcon1.png'
import reportsIcon from './images/Reports.png'
import appointmentIcon from './images/appointmentIcon.png'
import meetingIcon from './images/meetingIcon.png'
import chatIcon from './images/chatIcon.png'
import { Component } from 'react';
import { Auth } from 'aws-amplify';
import html from './homepage'
 
Amplify.configure(awsconfig);

const AppHtml = () => {
 const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    return authState === AuthState.SignedIn && user ? (
      console.log('UserGroup', user['signInUserSession']['accessToken']['payload']['cognito:groups'][0]),
 <div>
 <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand brand-text" href="#">
        <img src={telemedicineLogo} alt="" width="25" height="25" className="d-inline-block align-text-top"/>
        Telemedicine 
      </a>
      <div className="btn-group">
        <button type="button" className="btn btn-light"><img className="d-inline-block align-text-top" src={userIcon} alt="" width="20" height="20"/>{" " + user.attributes.name}</button>
        <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><hr className="dropdown-divider"></hr></li>
          <li><a className="dropdown-item" href="#"><AmplifySignOut /></a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="d-flex justify-content-evenly navbar primary-color">
    <button type="button" className="btn btn-secondary btn-sm">Reports</button>
    <button type="button" className="btn btn-secondary btn-sm">Messages</button>
    <button type="button" className="btn btn-secondary btn-sm">Appointments</button>
    <button type="button" className="btn btn-secondary btn-sm">Recordings</button>
    <span className="navbar-brand mb-0 h1"></span>
  </div>
  <div className="d-flex justify-content-evenly flex-column primary-color welcome-box">
    <div className="welcome-textbox">
      <h1>Welcome, {user.attributes.name}</h1> 
    </div>
    <div className="beside">
      <div className="dot"><img id="center-icons1" src={reportsIcon} alt="" width="130" height="100"/>
      </div>
      <div className="textbox">
        <a href="#"><h3>View your reports</h3></a>
      </div>
    </div>
  </div>
  <div className="d-flex justify-content-evenly flex-column primary-color info-box">
    <div className="beside">
      <div className="dot"><img id="center-icons2" src={appointmentIcon} alt="" width="105" height="100"/>
      </div>
      <div className="textbox">
        <a href="#"><h3>Schedule an Appointment</h3></a>
      </div>
    </div>
  </div>
  <div className="d-flex justify-content-evenly flex-column primary-color info-box">
    <div className="beside">
      <div className="dot"><img id="center-icons2" src={meetingIcon} alt="" width="110" height="100" className="d-inline-block align-text-top"/>
      </div>
      <div className="textbox">
        <a href="#"><h3>Join a Meeting</h3></a>
      </div>
    </div>
  </div>
  <div className="d-flex justify-content-evenly flex-column primary-color info-box">
    <div className="beside">
      <div className="dot"><img id="center-icons2" src={chatIcon} alt="" width="110" height="100" className="d-inline-block align-text-top"/>
      </div>
      <div className="textbox">
        <a href="#"><h3>Chat with a Doctor</h3></a>
      </div>
    </div>
  </div>
</div>
) : (
  <AmplifyAuthenticator /> );
 }   
  
export default AppHtml;