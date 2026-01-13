// in the typescript the object can be mostly use in the passing it as the parameter to the function to handle differnt flow 
// of incoming of the data


let User =  {
    name : "Girish",
    age : 21 ,
    email : "thoratgirish286@gmail.com"
}

console.log(User);

function UserShown(): {name : string , email  : string}{
    return {name : "Girish" , email :"thoratgirish286@gmail.com" }
}
console.log(UserShown());

// HERE we see we can pass it as the parameters to the fucntion which are the object 


// type aliases are those where it works as the object declaration or any other use depend on usecase 
// It is use to decalre it once and can be use again


type USER = {
    name : string ,
    age : number ,
    email :  string ,
    isActive : boolean 
}

function userCreation(user : USER) : USER { // here we see that the parameters are being smaller and still deal on the same data
    return user; // It help in the deal with the larger value and can be use again and again  depend on the use cae
    
}

console.log(userCreation({name : "Girish" , age :21, email:"thoratgirish", isActive: true }));

// here we see the creation of object which can be use as an the datatype to the others 

type User1 = {
    readonly _id : string, // here we cannot change the id it is readonly mode
    name : string ,
    email :string,
    isActive : boolean,
    cardCrendintials ? : string // it shows it is an optional feild

}

let Myuser : User1 = {
    _id : "12345",
    name : "Girish",
    email : "G@gmail.com",
    isActive : false
    // due to the cardCrendintials is an or feild so it does not show error
};

console.log(Myuser);
// Myuser._id = "ABCD"; // It will show an error  of the read only property
Myuser.cardCrendintials = "HSX22#2";
console.log(Myuser);

type CardNumber = {
    cardnumber : string
}

type CardDetails = {
    cardInfo  : string
}

type CardCVV  = CardNumber & CardDetails & { // It works as an inhertiance of type where it use all the properties 
    cvv : string
}

let newCardDetails : CardCVV = {
    cvv : "12-02-2022",
    cardnumber : "hscx3#2",
    cardInfo  :"ATPOST VAIJAPUR"
}

console.log(newCardDetails);

