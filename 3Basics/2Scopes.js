// let a = 5
// const b = 6
// var c = 2

// console.log(a);
// console.log(b);
// console.log(c);

// if (true) {
//     let a = 5
//     const b = 6
//     var c = 2
// }

// console.log(a);
// console.log(b);
// console.log(c);

// var a = 56
// let b = 100
// const c = 200

if (true) {
    var a = 5
    let b = 400
    const c = 900
    // console.log(c);
}
// console.log(c);

//10:48

function one(){
    const username = "satyam"
    function two(){
        const website = "satyam.in"
        console.log(username);
    }
    // console.log(website); //not possible outside scope
    two()
}

// one()

if (true) {
    const munna = "satyam"
    if (munna === "satyam"){
        const munnamitra = " chunna"
        // console.log(munna + munnamitra);
    }
    // console.log(munnamitra); //Not posible

}

// console.log(munna); // not Possible

// console.log(addOne(5));
function addOne(num){
    return num + 1
}

// console.log(addTwo(5)) // Expression cannot be called before its initialization
// const addTwo = function(num){
//     return num + 2
// }

const user = {
    userName : "Satyam Sharma",
    Price : 499,
    welcomeMessage : function(){
        // console.log(`${userName} , is user`);
        console.log(this);
        console.log(`${this.userName} , is user`);
    }    
}

// user.welcomeMessage()
// user.userName = "Satyam is my Name"
// user.welcomeMessage()

// console.log(this); // empty scope

// function chai(){
//     // console.log(this);  // many properties
//     let userName1 = "Satyam"
//     console.log(this.userName1); // undefined
// }
// chai() 

// const chai = function(){
//     let userName = "Satyam"
//     console.log(this.userName); // undefined
// }

// chai()

// const chai = () => {
//     let userName2 = "Satyam"
//     console.log(this); // Empty Scope
//     console.log(this.userName2); // undefined
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,6));


// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(5,9));

// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(9,9));

// const addTwo = (num1, num2) =>  {addition : "bhaiya"} // undefined
// console.log(addTwo(9,9));

const addTwo = (num1, num2) =>  ({addition : "bhaiya"}) // working
console.log(addTwo(9,9));

const OneArray = [2,5,3,7,4]
