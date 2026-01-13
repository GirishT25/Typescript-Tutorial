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




    interface ADD { // this are the function signature where we can use it multiple time as per our need because the 
        (a : number , b : number ) : number; // return type the parameters are the same and can be use multiple times
    } // It use in the interfacae because the interface because the object stores the multiple proprties according to user requirment
    // Here we see as we are using only for the function so that the property is being formed according to the function 
    // Interface is like forming the property of the object 
    const add : ADD = (x , y ) => x + y;
    console.log(add(5 , 4));

    const add2 : ADD  =  (x , y)=>{
            return x + y
    }
    console.log(add2(5 , 23 ));


    function addMultiple(x : number ,  y : number , z :ADD) :  number {
            return z(x  , y);
    }

    console.log(addMultiple(5 , 78 ,add2));


    function UsingNeverKeyword(a : number , b : number) : never { // The used of the never keyword is for the fucntion which never return anything 
            throw new Error("Sample Error occuered"); // The function which is in the infinte loop  and the function is having nothing in that
    } 

    