function addTwo(num: number) {
  //   num.toUpperCase(); // should not be allowed as it should be num type here

  return num + 2;
}

function getUpper(val: string) {
  // in case of function type definition
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: number,
  isPaid: boolean
) {}

let loginUser = (name: string, email: string, isPaid: boolean = true) => {};

addTwo(5);
getUpper("Parteek");

signUpUser("Parteek", "a@b.com", 123, true);
loginUser("p", "a@b.com");

export {};
