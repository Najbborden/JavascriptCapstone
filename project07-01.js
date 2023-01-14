"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Najee Borden
      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {
  // Prevent default submit
  e.preventDefault();
  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");

  // regex1 variable of regex that matches any uppercase letter A through Z
  let regex1 = /[A-Z]/;
  // regex2 variable of regex that that matches any single digit
  let regex2 = /[0-9]/;
  // // regex3 variable of regex that matches the symbols !$#%
  let regex3 = /[!$#%]/;

  // If the length of pwd is less than 8
  if (pwd.length < 8) {
    // set the text content of the feedback object to "Your password must be at least 8 characters."
    feedback.textContent = "Your password must be at least 8 characters.";

    // Else if the test() method with the regex1 regular expression applied to pwd returns false
  } else if (!regex1.test(pwd)) {
    // set the text content of the feedback object to "Your password must include an uppercase letter."
    feedback.textContent = "Your password must include an uppercase letter.";

    // Else if the test() method with the regex2 regular expression applied to pwd returns false
  } else if (!regex2.test(pwd)) {
    // set the text of feedback to "Your password must include a number."
    feedback.textContent = "Your password must include a number.";
  } else if (!regex3.test(pwd)) {
    // Else if the test() method with the regex3 regular expression applied to pwd returns false,
    // set the text of feedback to "Your password must include one of the following: !$#%".
    feedback.textContent = "Your password must include one of the following: !$#%.";
  } else {
    // Otherwise, apply the submit() method to the signupForm object to submit the form for processing.
    signupForm.submit();
  }
});

