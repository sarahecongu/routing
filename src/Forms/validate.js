import React from 'react';

import { FormSignup} from './FormSignup';
import{FormSuccess} from './FormSuccess';
import ValidateInfo from './validateInfo';


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

export function Validate() {
  return (
    <div>
      <div class="tab">
      <button class="tablinks" onClick={event => openCity(event, 'FormSignUp')}>Form</button>
      <button class="tablinks" onClick={event => openCity(event, 'FormSuccess')}>Form</button>
      <button class="tablinks" onClick={event => openCity(event, 'validateInfo')}>Form</button>
    


    </div>

    <div id="form" class="tabcontent">
      <FormSignup />
    </div>

    <div id="form" class="tabcontent">
      <ValidateInfo />
    </div>
    <div id="form" class="tabcontent">
      <FormSuccess />
    </div>
    </div>
  )
}