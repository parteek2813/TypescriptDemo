"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
  //   num.toUpperCase(); // should not be allowed as it should be num type here
  return num + 2;
}
function getUpper(val) {
  // in case of function type definition
  return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {}
var loginUser = function (name, email, isPaid) {
  if (isPaid === void 0) {
    // if isPaid is void , then it is zero
    isPaid = true;
  }
};
addTwo(5);
getUpper("Parteek");
signUpUser("Parteek", "a@b.com", 123, true);
loginUser("p", "a@b.com");
