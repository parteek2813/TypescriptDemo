"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "55";
score = true; // allowed 
var parteek = {
    name: "parteek",
    id: 121,
};
parteek = { username: "pt", id: 121 };
// In function , union type works same, but use the string or number function
// carefully in the function ..... and use if else condition to make it 
// pure strin or pure number
// function getDbId(id: Number | string){
//     // making some API calls
//     console.log(`Db Id: ${id}`);
// }
function getDbId(id) {
    if (typeof id == "string") {
        id.toLowerCase();
    }
    else {
        if (typeof id == "number") {
            id + 2;
            console.log("Not a string");
        }
    }
}
getDbId(3);
getDbId("3");
// array
var data = [1, 23, 2, 2, 23, 2];
var data2 = ["1,23,2,2,23,2"];
// array should be either all the numbers or either all the strings
// it can't be both in the same array
var data3 = ["1,23,2,2,23,2"];
// for using both the strings and number in the same array, it should be 
// declare in diff way with brackets enclosed like below
var data4 = ["1,23,2,2", 21, 1, 2, 3, true];
// let pi: 3.14 = 3.14;
// pi = 3.145; // not allowed
var seatAllotment;
seatAllotment = "aisle";
