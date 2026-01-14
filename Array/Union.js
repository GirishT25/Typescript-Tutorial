// Union is used for the handling the different datatype input where the incoming data can be in differnet format 
// The data can be handle as like string , number , Array of string , number    
var User_ID; // Here we create the variable where the User_ID becomes as an unino of the both datatype
User_ID = 25; // It can be number 
User_ID = "GIRISH#5"; // It can be string 
function UserDetails(user) {
    if (typeof user === "number") { // for operation we need to do the typecheck of the parameter
        user = user + 25;
    }
    if (typeof user === "string") { // for operation we need to do the typecheck of the parameter 
        return console.log("Hello ".concat(user));
    }
    return user;
}
console.log(UserDetails("Girish"));
var Girish = {
    username: "Girish@25",
    password: "Girish@25",
    isAdmin: true
};
if (Girish.isAdmin === true) {
    console.log("Admin registration sucessful as the username is :".concat(Girish.username));
}
var multivalueArray = []; // multivalue array . It is also called an the union operator 
multivalueArray.push("Girish");
multivalueArray.push(25);
multivalueArray.push(true);
console.log(multivalueArray);
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "Crew" // This will show an error because the value is not in the union type
