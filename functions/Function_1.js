function User(name, email, isPaid) {
    console.log("Hello ".concat(name, " your email is : ").concat(email, " and you had paid ").concat(isPaid));
}
User("GIRISH", "thoratgirish286@gmai.com", true);
function User1(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    console.log("Hello ".concat(name, " your email is : ").concat(email, " and you had paid ").concat(isPaid));
}
User1("GIRISH", "thoratgirish286@gmai.com");
