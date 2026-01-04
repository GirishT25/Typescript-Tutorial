function User(name : string ,email :string , isPaid : boolean){
    console.log(`Hello ${name} your email is : ${email} and you had paid ${isPaid}`);
}

User("GIRISH", "thoratgirish286@gmai.com" , true);


function User1(name : string ,email :string , isPaid : boolean = true){
    console.log(`Hello ${name} your email is : ${email} and you had paid ${isPaid}`);

}

User1("GIRISH", "thoratgirish286@gmai.com");

