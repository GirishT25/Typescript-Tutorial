var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var newUser = new User("abcd@gmail.com", "Girish");
// newUser.city = "Girish" // this will show an error beacuse of readOnly property
console.log(newUser);
