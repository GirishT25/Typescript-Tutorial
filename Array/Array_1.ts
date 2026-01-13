const SuperHeros : string[] = ["Spiderman" ,"Superman" , "IronMan"];
const superHeros : [] = [];
const SuperPowers : number[] = [] // decalration of number array
// superHeros.push("Captian America"); // This will show an error because the array we decalre is an empty array 
                                    // i.e It should only consider the empty to overcome this we are using the SuperHeros 
                                    // deaclaration format 

type User = {
    name : string ,
    email  : string
}

let NewUsers : User[] = []; // here we use an type as a arrauy where we can relate it to the object array of the javascript

NewUsers.push({name : "" , email : ""} , {name: "Girish" , email:"thoratgirish286@gmail.com"});

console.log(NewUsers);