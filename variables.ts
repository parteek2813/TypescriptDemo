let greetings: string = "Hello, world";
console.log(greetings);

// numbers
let userId: number = 23213;
userId.toString();

// boolean
let isLoggedIn: boolean = false;

// any
let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();

let newHero: string;

function cast() {
  return "cast is coming";
}
function getNewHero() {
  return cast();
}

newHero = getNewHero();

export {};
