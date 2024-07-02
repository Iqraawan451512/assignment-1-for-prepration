 /*#### 5. Assignability Error
In a file named assignabilityError.ts, create a variable 
with a specific type and try to assign a value of a different 
type to it. Observe the TypeScript error, then correct it
 and explain why the error occurred.
*/



//let myname :string=24;// its a assignability error
//correct is
let myname1 :string="iqra";
console.log(myname1);

 //question 2

 /*function great(name :string, wishes:string){
console.log(`hello ${name} wish you a very very ${wishes} to you`);

}
great(23,"Happy Birthday"); // its a assignability error
    */
function great(name :string, wishes:string){
console.log(`hello ${name} wish you a very very ${wishes} to you`);

}
great("iqra","Happy Birthday");


  
