// 2:34
const FbUser = {
    userId : 8932,
    userName : "Satyam",
    isLoggedIn : true
}

// console.log(FbUser["userName"]);

const fbRegularUser = {
    userEmail : "Satyam@furniture.com",
    fullName : {
        userFullName : {
            firstName : "kanua",
            LastName : "Sharma"
        }
    }
}

// console.log(fbRegularUser.fullName.userFullName.firstName);

const object1 = {
    1 : "a",
    2 : "b"
}

const object2 = {
    3 : "c",
    4 : "d"
}

// const object3 = {object1,object2}
// console.log(object3);

// Object.assign(object1, object2) // {Target , Source}

// console.log(Object.assign(object1, object2));
// console.log(object1);
// console.log(object2);

// console.log(Object.assign({}, object1, object2));
// console.log(object1);
// console.log(object2);

const object4 = {...object1, ...object2}
// console.log(object4);

const oneArray = [
    {
        colour1 : "Red",
        colour2 : "Blue"
    },
    {
        colour3 : "white",
        colour4 : "green"
    },
    {
        colour5 : "Orange",
        colour6 : "Yellow"
    }
]

// console.log(oneArray);
// console.log(oneArray[0].colour1);

// console.log(Object.keys(FbUser)); // return values are in array
// console.log(Object.values(FbUser)); // return values are in array
// console.log(Object.entries(FbUser)); // return values are in array

// console.log(FbUser.hasOwnProperty("isLoggedIn")); // only check presence of keys.

// ------------- Destructure ------------

const course = {
    courseName : "JavaScript",
    coursePrice : "999",
    courseInstructor : "bhagwan"
}

// const {courseName : NaamBol} = course
// console.log(NaamBol);
// console.log(course["courseName"]);

/*
{
    //Object type Json file 
    "courseName" : "JavaScript",
    "coursePrice" : "999",
    "courseInstructor" : "bhagwan"
    
}
*/

/*
[
    // Array type Json
    {
        "colour1" : "Red",
        "colour2" : "Blue"
    },
    {
        "colour3" : "white",
        "colour4" : "green"
    },
    {
        "colour5" : "Orange",
        "colour6" : "Yellow"
    }
]
*/