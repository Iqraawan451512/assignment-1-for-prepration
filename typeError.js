"use strict";
/*

#### 4. Type Error
Create a file named typeError.ts. Define a function that takes
 two parameters: a string and a number. Call this function with
 incorrect argument types and observe the TypeScript error. Fix the
  error and comment on what the issue was.
*/
//function myData(name:string,id:number){
//  console.log(`my name is  ${name}  and my id no  ${id} is`);
//   }
//myData( 2418."iqra") its a typeError because we pass number instead of string
function myData(name, id) {
    console.log(`my name is  ${name}  and my id no  ${id} is`);
}
myData("iqra", 2418);
//function 2
function personalInformation(name, age, education) {
    console.log(`my name is ${name}  my age is ${age}  i am doing ${education}`);
}
personalInformation("iqra", 26, "M.COM");
