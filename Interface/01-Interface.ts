//  Interface is use to define the structure of the object 
// It goes like 
interface User {
    name : string ;
    age : number;
    address : {
        street : string ;
        pinCode : number ;
        city : string ;
    };
    contactNumber ? : number; // It is an optional feild  
    sayHello : () => string; // It is an one type of creating an function 
    greetings(name : string) :  string ; // this is an another method of the creation of function
 
};
 // Here we see we define same as the object structure but the datatype and the accept values of the datatype is define here
 // It also help in the code reusability


let  newUser : User = {
    name : "Girish" ,
    age : 21 ,
    address : { 
        street : "Ladgaon Road" ,
        pinCode : 423701 ,
        city : "Vaijapur" ,
    },
    sayHello : () =>{
        return "Girish";
    },
    greetings : (name) =>{
        return `Good Night ${name}`
    },
    email : "thoratgirish296@gmail.com"
    
}
// If any value is missing or the datatype is not matching it will show an error
// the type safety is maintained here and it will help in the code maintainability

console.log(newUser);
console.log(newUser.sayHello())
console.log(newUser.greetings("Girish"))


// Here we can reopen and assign some value to the interface like this

interface User {
    email : string;
}
// we do this because of the interface is created at some other file or separte files
// we need this and add some more property to the interface and due to this  
// it genreate the new property of the reopen and the reasign

//Interface can also reassign  and inherit like

interface Admin extends User {
    isAdmin : boolean;
    role : "Admin" | "Ta" | "User" ;
}


// here we see it also has the property of the User and the Admin it help in
// reuse of the interface and due to this it help in creation of inhertiance 
let adminCreation : Admin = {
    name : "Girish" ,
    age : 21 ,
    address : { 
        street : "Ladgaon Road" ,
        pinCode : 423701 ,
        city : "Vaijapur" ,
    },
    sayHello : () =>{
        return "Girish";
    },
    greetings : (name) =>{
        return `Good Night ${name}`
    },
    email : "thoratgirish286@gmail.com",
    isAdmin :  true ,
    role : "Admin"

}

console.log(adminCreation);