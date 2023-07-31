// define object
const User = {
  name: "Parteek",
  email: "parteek@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}
let newUser = { name: "parteek", isPaid: false, email: "p@p.com" };
createUser(newUser);

export {};
