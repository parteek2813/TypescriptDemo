// Interfaces

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// function getBear(name: string): string {
//   return name;
// }

// const bear = getBear("Parteek");
// bear.name;
// bear.honey;

// TYPES

type Animal = {
  name: string;
};

// Use & for using the Animal property
type Bear = Animal & {
  honey: boolean;
};

const bear = getBear();
bear.name;
bear.honey;
