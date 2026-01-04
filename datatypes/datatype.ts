// Typescript has the same datatype as the javascript 
//   Number  , String , Boolean ,  Array , Null , Undefined , object , Function ,
// In addition to this the  typescript has the datatype like the any ,  
// any  : TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

// When a value is of type any, you can access any properties of it (which will in turn be of type any), 
//  call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:



let value: unknown;


if (typeof value === "number") {
  console.log(value + 5);
}

console.log(typeof value);
let value1: any = 10;
// value1 = "Hello";
// value1 = true;

console.log(value1);





