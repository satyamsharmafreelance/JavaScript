const userEmail = [];

// if (userEmail) {
//     console.log("Executed with true Value");
// } else {
//     console.log("Executed with false Value");
// }

// falsy Values 
// false, 0, -0, 0n, Nan, null, undefined, "", ''

// tricky truthy Values 
//  "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Executed with true value");
// }

const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("Executed with true value");
// } else {
//     console.log("Executed with false Value");
// }

// nullish Coalescing Operator : ?? --> null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10 
val1 = undefined ?? 10 ?? 20
console.log(val1);

// ++++++++++++++++++ Terinary Operator +++++++++++++++++

// condition ? true : false 
const iceTeaPrice = 200;
iceTeaPrice >= 200 ? console.log("Executed with true Value >= 200") : console.log("Executed with false Value");
