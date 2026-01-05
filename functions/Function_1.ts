function User(name : string ,email :string , isPaid : boolean){ // here we can see the type checking is done by giving the datatype
    // console.log(`Hello ${name} your email is : ${email} and you had paid ${isPaid}`); // the datatype value return by the fucntion
}

User("GIRISH", "thoratgirish286@gmai.com" , true);


function User1(name : string ,email :string , isPaid : boolean = true){
    // console.log(`Hello ${name} your email is : ${email} and you had paid ${isPaid}`);

}

User1("GIRISH", "thoratgirish286@gmai.com");
function example( num : number){
    return "Girish"; // here we see the problem where the parameter is passed is number and it is returing the String
}                   
// console.log(example(5));

function example1(val : number) : number{ // To avoid upper issue we need to declare like this
     return val + 5 ;                   // It will always return the number as the value . It will not take anything as the other return value
}

// console.log(example1(5));


function errormessage(errmesg : string) : string{
    errmesg  = "Girish";
    return errmesg;
}
 // here we see the function can return the value of a specific datatype    
// console.log(errormessage("Girish"));

    function errormessage1(errmesg : string) :void{ // If we dont want to return anything from the function we can use void
        // console.log(typeof errmesg);
        // console.log(errmesg);
    }

    // console.log(errormessage1("Girish"));

    const heros = ["Iron Man", "Captian"];
    heros.map((hero) =>{
         return `Heros are ${hero}`;
    });


    


