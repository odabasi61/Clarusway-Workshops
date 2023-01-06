"use strict";

const email = "aliodabas_a@hotmail.com";
const partialEmail = email.replace(/(\w{2})[\w.-]+@([\w.]+\w)/, "$1***@$2");
console.log(partialEmail);
