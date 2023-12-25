// om namah shivaay
// --------- Maths and Numbers ------------

const newnum = new Number(745)

// console.log(newnum);
// console.log(newnum.toString());
// console.log(typeof newnum.toString());

// console.log(newnum.toString().length);
// console.log(newnum.toFixed(2));

function precisekeliye(x){
    return x.toPrecision(4)
}
// console.log(precisekeliye(695.45685655864896));

const largenum = new Number(72854256n)
// console.log(largenum.toLocaleString('en-IN', {style: 'currency' , currency : 'INR'}));

// ---------------- Math --------------
// console.log(Math);

// const nummath = -876;

const nummath =  876.34;

// console.log(Math.abs(nummath)); // neg to positive
// console.log(Math.round(nummath)); // Removes decimal by roundofing the number 
// console.log(Math.ceil(nummath)); // roundof at upper value only
// console.log(Math.floor(nummath)); // roundof at lower value only

const arrhai = [4,5,564,554,44,6565,45,3]

// console.log(Math.min(arrhai));  // not works
// console.log(Math.min(4,5,564,554,44,6565,45,3));
// console.log(Math.max(4,5,564,554,44,6565,45,3));
console.log(Math.floor((Math.random()*10)) + 1); // range = 1 to 10

let mini = 10
let maxi = 20
console.log(Math.floor((Math.random() * (maxi - mini)) + mini)) // range = 10 to 19
console.log(Math.floor((Math.random() * (maxi - mini) + 1) + mini)) // range = 11 to 20
console.log(Math.floor((Math.random() * (maxi - mini + 1)) + mini)) // range = 10 to 20
