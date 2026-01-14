// Tuple is an Data structure of the specific datatype which we allowed to write in the specific feild
// 
var newUser;
newUser = ["Girish", 21];
// newUser = ["Girish" , 21 , true]; // if we try to insert an extra value it will show an error 
// It is use for the specific purpose where the data should be in the specific format 
console.log(typeof newUser); // It will return it is an object . But it is an array where the array has some methods
// the mehthods like push , pop , shift  can be applied
newUser.push("hello"); // It is getting push so this is an loophole in this and use it carefu
console.log(newUser);
// ---------------------Enums----------------------
//  It provide the greater acess to the value of the constants and it create more visiblity
// It provide the values for the constants it is use for where 
var seatChoice;
(function (seatChoice) {
    seatChoice["AISLE"] = "Girish";
    seatChoice["MIDDLE"] = "Thorat";
    seatChoice["WINDOW"] = "ABCD";
})(seatChoice || (seatChoice = {}));
var hcseat = seatChoice.AISLE;
console.log(hcseat);
for (var _i = 0, seatChoice_1 = seatChoice; _i < seatChoice_1.length; _i++) {
    var element = seatChoice_1[_i];
    console.log(element);
}
