let person = {
  name: "John",
  age: 21,
};

// In all three examples above, we’ve written functions that take objects that contain
// the property name (which must be a string) and age (which must be a number).

// Method 1
// function greet(person: { name: string; age: number }) {
//   return "hello " + person.name;
// }

// Method 2
// interface Person {
//   name: string;
//   age: number;
// }

// function greet(person: Person) {
//   return "Hello " + person.name;
// }

// Method 3
// type Person = {
//   name: string;
//   age: number;
// };

// function greet(person: Person) {
//   return "Hello " + person.name;
// }

// greet(person);

// OPTIONAL PARAMETERS
// interface Shape {}

// declare function getShape(): Shape;

// interface PaintOptions {
//   shape: Shape;
//   xPos?: number; // Number || undefined
//   yPos?: number;
// }

// // METHOD 1
// function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions): void {
//   console.log("x coordinate at", xPos);
//   console.log("y coordinate at", yPos);
//   let xPos = opts.xPos === undefined ? 0 : opts.xPos;
//   let yPos = opts.yPos === undefined ? 0 : opts.yPos;
// }

// METHOD 2 Without Interfcae usage
// function paintShape(opts: {
//   shape: Shape;
//   xPos?: number;
//   yPos?: number;
// }): void {}

// const shape = getShape();

// These all are valid in ts by using the optional parameters
// paintShape({ shape });
// paintShape({ shape, xPos: 100 });
// paintShape({ shape, yPos: 100 });
// paintShape({ shape, xPos: 100, yPos: 100 });

// export {};

// READ ONLY PROPERTIES

// EXAMPLE 1

// interface SomeType {
//   readonly prop: string;
// }

// function doSomething(obj: SomeType) {
//   // reading from object prop
//   console.log(`prop has the value ${obj.prop}`);

//   // But can't assign
//   obj.prop = "Hello";
// }

// EXAMPLE 2

interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBDay(home: Home) {
  // read and update properties from home.resident

  // here content can be changed but home.resident object can't be changed
  console.log(`Happy birthday ${home.resident.name}`);
  home.resident.age++;
}

function evict(home: Home) {
  //can't write to the 'resident' property itself on a 'Home'
  home.resident = {
    name: "Victor the Evictor",
    age: 42,
  };
}
