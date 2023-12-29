function EkFunction(){
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("M");
}

// EkFunction()

function AddTwoNumbers(num1, num2){
    return num1 + num2
}
const addReturnCheck = AddTwoNumbers(3,6)
// console.log(addReturnCheck);

function LogInUserName(userName = "Mai to Default hu"){
    if (!userName/* OR userName === undefined*/) {
        return `Plss Enter your UserName`
    }
    return `User Name is : ${userName}`
}
const checkLogin = LogInUserName("Satyam")
// console.log(checkLogin);

function calculateCartPrice(offer1, offer2, ...items){
    return items
}
// console.log(calculateCartPrice(100,230,300,4000,500));

const user = {
    Course : "JavaScript",
    Price : 299
}

function handleObject(objectCall){
    return `Course Name = ${objectCall.Course} and Price = ${objectCall.Price}`
}
// console.log(handleObject(user));
console.log(handleObject({
    Course : "But I am a Custom Course",
    Price : 0
}));

OneArray = [100 ,200 ,300 , 400]

function takeArray(ArrayIn){
    return ArrayIn[1]
}

// console.log(takeArray(OneArray));
console.log(takeArray(["Samtoshi", "Ganesh", "Kartikeya", "Samkar", "Parvati"]));
