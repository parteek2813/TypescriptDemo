var person = {
  name: "John",
  age: 21,
};
var writablePerson = {
  name: "Person 1",
  age: 42,
};
// working
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
