"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Brenden Riley
   Date:    4.18.19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
// When the fields are interacted with, functions are run to update the page and include the information the user entered. These are stored as session variables so they can be accessed from multiple sources
window.addEventListener("load", function () {
      calcCart()
      var regForm = document.forms.regForm;
      regForm.elements.regSubmit.onclick = sessionsTest;
      regForm.elements.fnBox.onblur = calcCart;
      regForm.elements.lnBox.onblur = calcCart;
      regForm.elements.groupBox.onblur = calcCart;
      regForm.elements.mailBox.onblur = calcCart;
      regForm.elements.phoneBox.onblur = calcCart;
      regForm.elements.banquetBox.onblur = calcCart;
      regForm.elements.sessionBox.onchange = calcCart;
      regForm.elements.mediaCB.onclick = calcCart;
})
// Tests whether or not a session package has been selected
function sessionsTest() {
      var sessionBox = document.getElementById("sessionBox");
      if (sessionBox.selectedIndex === -1) {
            sessionBox.setCustomValidity("Select a Session Package")
      } else {
            sessionBox.setCustomValidity("");
      }
};

// Gets the values of the fields, and stores the values within variables, so that they can be uused later. The variables are used later on to update the page with the information.
function calcCart() {
      // Gets the values of the fields, and stores the values within variables, so that they can be uused later. The variables are used later on to update the page with the information.
      sessionStorage.setItem("confName", document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value + "")
      sessionStorage.setItem("confGroup", document.getElementById("groupBox").value)
      sessionStorage.setItem("confMail", document.getElementById("mailBox").value)
      sessionStorage.setItem("confPhone", document.getElementById("phoneBox").value)
      sessionStorage.setItem("confBanquet", document.getElementById("banquetBox").value)
      var confBanquet = document.getElementById("banquetBox").value;
      sessionStorage.setItem("confBanquetCost", confBanquet * 55)
      var confBanquetCost = confBanquet * 55;
      var sessionBox = document.getElementById("sessionBox");
      // Gets what options are selected from the number of people attending the banquet, and whether the person has purchased a media pack, which is stored in variables to be used later
      if (sessionBox.selectedIndex !== -1) {
            sessionStorage.setItem("confSession", sessionBox[sessionBox.selectedIndex].innerText)
            sessionStorage.setItem("confSessionCost", sessionBox[sessionBox.selectedIndex].value)
            var confSessionCost = sessionBox[sessionBox.selectedIndex].value;
      } else {
            sessionStorage.setItem("confSession", "")
            sessionStorage.setItem("confSessionCost", 0)
            var confSessionCost = 0;
      }
      if (document.getElementById("mediaCB").checked == true) {
            sessionStorage.setItem("confPack", "yes")
            sessionStorage.setItem("confPackCost", 115)
            var confPackCost = 115;
      } else {
            sessionStorage.setItem("confPack", "no")
            sessionStorage.setItem("confPackCost", 0)
            var confPackCost = 0;
      }
      // Gets the total amount of money
      sessionStorage.setItem("confTotal", parseFloat(confSessionCost) + parseFloat(confBanquetCost) + parseFloat(confPackCost));
      //Runs the function that updates the page
      writeSessionValues();
};

function writeSessionValues() {
      // updates the page with information that the user entered.
      document.getElementById("regName").textContent = sessionStorage.getItem("confName");
      document.getElementById("regGroup").textContent = sessionStorage.getItem("confGroup");
      document.getElementById("regEmail").textContent = sessionStorage.getItem("confMail");
      document.getElementById("regPhone").textContent = sessionStorage.getItem("confPhone");
      document.getElementById("regSession").textContent = sessionStorage.getItem("confSession");
      document.getElementById("regBanquet").textContent = sessionStorage.getItem("confBanquet");
      document.getElementById("regPack").textContent = sessionStorage.getItem("confPack");
      document.getElementById("regTotal").textContent = "$" + sessionStorage.getItem("confTotal")
}