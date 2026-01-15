class User {
    email : string ;
    name : string;
    readonly city : string = ""
    constructor(email : string , name : string){
        this.email = email;
        this.name = name;
    }
}

   let  newUser = new User("abcd@gmail.com" , "Girish");
// newUser.city = "Girish" // this will show an error beacuse of readOnly property

console.log(newUser);