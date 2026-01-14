;
// Here we see we define same as the object structure but the datatype and the accept values of the datatype is define here
// It also help in the code reusability
var newUser = {
    name: "Girish",
    age: 21,
    address: {
        street: "Ladgaon Road",
        pinCode: 423701,
        city: "Vaijapur",
    },
    sayHello: function () {
        return "Girish";
    },
    greetings: function (name) {
        return "Good Night ".concat(name);
    },
    email: "thoratgirish296@gmail.com"
};
// If any value is missing or the datatype is not matching it will show an error
// the type safety is maintained here and it will help in the code maintainability
console.log(newUser);
console.log(newUser.sayHello());
console.log(newUser.greetings("Girish"));
var adminCreation = {
    name: "Girish",
    age: 21,
    address: {
        street: "Ladgaon Road",
        pinCode: 423701,
        city: "Vaijapur",
    },
    sayHello: function () {
        return "Girish";
    },
    greetings: function (name) {
        return "Good Night ".concat(name);
    },
    email: "thoratgirish286@gmail.com",
    isAdmin: true,
    role: "Admin"
};
console.log(adminCreation);
