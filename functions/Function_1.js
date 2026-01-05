function User(name, email, isPaid) {
    // console.log(`Hello ${name} your email is : ${email} and you had paid ${isPaid}`); // the datatype value return by the fucntion
}
User("GIRISH", "thoratgirish286@gmai.com", true);
function User1(name, email, isPaid) {
    // console.log(`Hello ${name} your email is : ${email} and you had paid ${isPaid}`);
    if (isPaid === void 0) { isPaid = true; }
}
User1("GIRISH", "thoratgirish286@gmai.com");
function example(num) {
    return "Girish"; // here we see the problem where the parameter is passed is number and it is returing the String
}
// console.log(example(5));
function example1(val) {
    return val + 5; // It will always return the number as the value . It will not take anything as the other return value
}
// console.log(example1(5));
function errormessage(errmesg) {
    errmesg = "Girish";
    return errmesg;
}
// here we see the function can return the value of a specific datatype    
// console.log(errormessage("Girish"));
function errormessage1(errmesg) {
    // console.log(typeof errmesg);
    // console.log(errmesg);
}
// console.log(errormessage1("Girish"));
var heros = ["Iron Man", "Captian"];
heros.map(function (hero) {
    return "Heros are ".concat(hero);
});
