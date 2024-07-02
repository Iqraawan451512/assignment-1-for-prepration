/*#### 2. JSON Objects
Create a TypeScript file named jsonObjects.ts.
 Define an interface for a student object with properties id, name,
  age, and courses.
 Create an array of student objects and print it to the console.*/

 interface StudentObject {
    id: number;
    name: string;
    age:number;
    cources:string[]
 }
 let Student :StudentObject= {
    id:2404,
    name:"iqra",
    age :26,
    cources: ["fiance","accounting","financial managnment"]
 };
 console.log(Student);
 console.log(Student.cources);
 console.log(Student["name"]);
 console.log(Student["age"]);
 
 
 
 