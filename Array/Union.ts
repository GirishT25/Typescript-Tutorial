// Union is used for the handling the different datatype input where the incoming data can be in differnet format 
// The data can be handle as like string , number , Array of string , number    

let User_ID  : number  | string ; // Here we create the variable where the User_ID becomes as an unino of the both datatype
User_ID =  25; // It can be number 
User_ID = "GIRISH#5";   // It can be string 

function UserDetails(user : number | string){ // here the union is accessing the multiple datatype as the parameter
    if(typeof user === "number"){ // for operation we need to do the typecheck of the parameter
        user = user + 25;
    }
    if(typeof user ==="string"){ // for operation we need to do the typecheck of the parameter 
        return console.log(`Hello ${user}`);
    }
    return user;

}

console.log(UserDetails("Girish"));

type UserRegeister = {
    name : string ,
    id : number
}

type Admin = {
    username : string ,
    password : string
    isAdmin ? : boolean
}

let Girish : UserRegeister | Admin = { // we also use the union as the multiple value user
    username : "Girish@25",
    password : "Girish@25",
    isAdmin : true
}

if(Girish.isAdmin === true){
    console.log(`Admin registration sucessful as the username is :${Girish.username}`);

}

let multivalueArray : (number | string | boolean) [] = []; // multivalue array . It is also called an the 
multivalueArray.push("Girish");
multivalueArray.push(25);
multivalueArray.push(true); 
console.log(multivalueArray);