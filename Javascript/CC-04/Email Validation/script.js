"use strict";

// const email = "username@username.com";

let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

let testEmails = [
  "notanemail.com",
  "workingexample@email.com",
  "another_working@somethingelse.org",
  "notworking@1.com",
];

testEmails.forEach((address) => {
  console.log(regex.test(address));
});
