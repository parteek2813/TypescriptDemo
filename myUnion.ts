let score: number | string | boolean = 33;


score = "55"; 
score = true; // allowed 

type User = {
    name: string,
    id: number,
    
}
type Admin = {
    username: string,
    id: number,

}

let parteek: User | Admin = {
    name: "parteek",
    id: 121,
}

parteek = {username: "pt", id: 121}



// In function , union type works same, but use the string or number function
// carefully in the function ..... and use if else condition to make it 
// pure strin or pure number


// function getDbId(id: Number | string){

//     // making some API calls
//     console.log(`Db Id: ${id}`);
// }


function getDbId(id: Number | string){

   if(typeof id == "string"){
    id.toLowerCase();
   }else{

    if(typeof id == "number"){
        id + 2;
    console.log("Not a string");
    }
    
   }
}

getDbId(3);
getDbId("3");


// array
const data: number[] = [1,23,2,2,23,2];
const data2: string[] = ["1,23,2,2,23,2"];

// array should be either all the numbers or either all the strings
// it can't be both in the same array

const data3: string[] | number[] = ["1,23,2,2,23,2"];

// for using both the strings and number in the same array, it should be 
// declare in diff way with brackets enclosed like below

const data4: (string | number | boolean)[] = ["1,23,2,2",21,1,2,3, true];



// let pi: 3.14 = 3.14;
// pi = 3.145; // not allowed


let seatAllotment: "aisle" | "middle" | "window";


seatAllotment = "aisle" ;
// seatAllotment = "crew" ; //  not allowed ...... it should be any one of the above 

export {}