//  Interface is use to define the structure of the object 
// It goes like 
interface User {
    name : string ;
    age : number;
    address : {
        street : string ;
        pinCode : number ;
        city : string ;
    }
};

let  newUser : User = {
    name : "Girish" ,
    age : 21 ,
    address : { 
        street : "Ladgaon Road" ,
        pinCode : 423701 ,
        city : "Vaijapur" ,
    }
}

console.log(newUser);