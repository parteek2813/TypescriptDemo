var person = {
  name: "John",
  age: 21,
};
function paintShape(opts) {}
var shape = getShape();
// These all are valid in ts by using the optional parameters
paintShape({ shape: shape });
paintShape({ shape: shape, xPos: 100 });
paintShape({ shape: shape, yPos: 100 });
paintShape({ shape: shape, xPos: 100, yPos: 100 });
