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

function sessionsTest() {
      var sessionBox = document.getElementById("sessionBox");
      if (sessionBox.selectedIndex === -1) {
            sessionBox.setCustomValidity("Select a Session Package")
      } else {
            sessionBox.setCustomValidity("");
      }
};

function calcCart() {
      var confName = "" + document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value + "";
      var confGroup = document.getElementById("groupBox").value;
      var confMail = document.getElementById("mailBox").value;
      var confPhone = document.getElementById("phoneBox").value;
      var confBanquet = document.getElementById("banquetBox").value;
      var confBanquetCost = confBanquet * 55;
      var sessionBox = document.getElementById("sessionBox");
      if (sessionBox.selectedIndex === -1) {
            var confSession = sessionBox.selectedIndex.innerText;
            var confSessionCost = sessionBox.selectedIndex.value;
      } else {
            var confSession = "";
            var confSessionCost = 0;
      }
};