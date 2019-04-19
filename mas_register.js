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
      sessionStorage.setItem("confName", document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value + "")
      var confName = "" + document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value + "";
      sessionStorage.setItem("confGroup", document.getElementById("groupBox").value)
      var confGroup = document.getElementById("groupBox").value;
      sessionStorage.setItem("confMail", document.getElementById("mailBox").value)
      var confMail = document.getElementById("mailBox").value;
      sessionStorage.setItem("confPhone", document.getElementById("phoneBox").value)
      var confPhone = document.getElementById("phoneBox").value;
      sessionStorage.setItem("confBanquet", document.getElementById("banquetBox").value)
      var confBanquet = document.getElementById("banquetBox").value;
      sessionStorage.setItem("confBanquetCost", confBanquet * 55)
      var confBanquetCost = confBanquet * 55;
      var sessionBox = document.getElementById("sessionBox");
      if (sessionBox.selectedIndex !== -1) {
            sessionStorage.setItem("confSession", sessionBox[sessionBox.selectedIndex].innerText)
            var confSession = sessionBox[sessionBox.selectedIndex].innerText;
            sessionStorage.setItem("confSessionCost", sessionBox[sessionBox.selectedIndex].value)
            var confSessionCost = sessionBox[sessionBox.selectedIndex].value;
      } else {
            sessionStorage.setItem("confSession", "")
            var confSession = "";
            sessionStorage.setItem("confSessionCost", 0)
            var confSessionCost = 0;
      }
      if (document.getElementById("mediaCB").checked == true) {
            sessionStorage.setItem("confPack", "yes")
            var confPack = "yes";
            sessionStorage.setItem("confPackCost", 115)
            var confPackCost = 115;
      } else {
            sessionStorage.setItem("confPack", "no")
            var confPack = "no";
            sessionStorage.setItem("confPackCost", 0)
            var confPackCost = 0;
      }
      sessionStorage.setItem("confTotal", parseFloat(confSessionCost) + parseFloat(confBanquetCost) + parseFloat(confPackCost))
      var confTotal = parseFloat(confSessionCost) + parseFloat(confBanquetCost) + parseFloat(confPackCost);
};

function writeSessionValues() {
      document.getElementById("regName").textContent = confName;
      document.getElementById("regGroup").textContent = confGroup;
      document.getElementById("regEmail").textContent = confMail;
      document.getElementById("regPhone").textContent = confPhone;
      document.getElementById("regSession").textContent = confSession;
      document.getElementById("regBanquet").textContent = confBanquet;
      document.getElementById("regPack").textContent = confPack;

}