// 8:43
// Singleton --> jo Constructor se banta hai

// Literals --> Normal object

let mySymbol;

const personInfo = {
    Name : "Satyam",
    age : 20,
    [mySymbol] : Symbol("Satyam Bhag Sevak"),
    Location : "Mumbai",
    email : "satyam@google.com",
    LoggedIn : true,
    lastLoggedIn : ["Monday", "Tuesday"]
}

// console.log(personInfo.Name);
// console.log(personInfo["email"]);

// console.log(personInfo);
// console.log(typeof personInfo[mySymbol]);

personInfo["email"] = "satyamsharma@govinda.com"
// console.log(personInfo["email"]);
// Object.freeze(personInfo) 

personInfo["email"] = "satyamsharma@madhurya.com"
// console.log(personInfo["email"]);

personInfo.greetings = function(){
    console.log(`Namah Aste, Shri Narayan`);
}
// personInfo.greetings()

personInfo.anotherGreetings = function(){
    console.log(`Namah Aste, Shri Narayan \nAsha hai Sabhi Mangalmay Hain, ${this.Name}`);
}

personInfo.anotherGreetings()

// 9:18