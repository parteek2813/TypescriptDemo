function addTwo(num: number): number {
  //   num.toUpperCase(); // should not be allowed as it should be num type here

  return num + 2;
  // return "hello";
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

// function getvalue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero: string): string => {
  return `Hero is {${hero}}`;
  // return 2; // gives erros
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// Some functions "never" returns a value
// THe never type represents a value which are never observed. In return type, this means
// that function throws an exception or terminates execution of the program.
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

let loginUser = (name: string, email: string, isPaid: boolean = true) => {};

let store = addTwo(5);
getUpper("Parteek");

signUpUser("Parteek", "a@b.com", 123, true);
loginUser("p", "a@b.com");

export {};
