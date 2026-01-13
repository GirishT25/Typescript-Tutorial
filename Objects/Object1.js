// in the typescript the object can be mostly use in the passing it as the parameter to the function to handle differnt flow 
// of incoming of the data
var User = {
    name: "Girish",
    age: 21,
    email: "thoratgirish286@gmail.com"
};
console.log(User);
function UserShown() {
    return { name: "Girish", email: "thoratgirish286@gmail.com" };
}
console.log(UserShown());
function userCreation(user) {
    return user; // It help in the deal with the larger value and can be use again and again  depend on the use cae
}
console.log(userCreation({ name: "Girish", age: 21, email: "thoratgirish", isActive: true }));
var Myuser = {
    _id: "12345",
    name: "Girish",
    email: "G@gmail.com",
    isActive: false
    // due to the cardCrendintials is an or feild so it does not show error
};
console.log(Myuser);
// Myuser._id = "ABCD"; // It will show an error  of the read only property
Myuser.cardCrendintials = "HSX22#2";
console.log(Myuser);
var newCardDetails = {
    cvv: "12-02-2022",
    // cardnumber : "hscx3#2",
    // cardInfo  :"ATPOST VAIJAPUR"
};
console.log(newCardDetails);
