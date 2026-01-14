// Tuple is an Data structure of the specific datatype which we allowed to write in the specific feild
// 
let  newUser : [string , number] ;

newUser = ["Girish" , 21 ];
// newUser = ["Girish" , 21 , true]; // if we try to insert an extra value it will show an error 
// It is use for the specific purpose where the data should be in the specific format 

console.log(typeof newUser); // It will return it is an object . But it is an array where the array has some methods
// the mehthods like push , pop , shift  can be applied
newUser.push("hello"); // It is getting push so this is an loophole in this and use it carefu
console.log(newUser);


// ---------------------Enums----------------------
//  It provide the greater acess to the value of the constants and it create more visiblity
// It provide the values for the constants it is use for where 
enum seatChoice {
    AISLE = "Girish",
    MIDDLE = "Thorat",
    WINDOW = "ABCD",
}

const hcseat = seatChoice.AISLE;
console.log(hcseat);

for (const element of seatChoice) {
    console.log(element);   
}
