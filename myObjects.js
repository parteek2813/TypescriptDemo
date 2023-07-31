"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// define object
var User = {
  name: "Parteek",
  email: "parteek@gmail.com",
  isActive: true,
};
function createUser(_a) {
  var string = _a.name,
    boolean = _a.isPaid;
}
function createCourse() {
  return { name: "reactjs", price: 399 };
}
var newUser = { name: "parteek", isPaid: false, email: "p@p.com" };
createUser(newUser);
