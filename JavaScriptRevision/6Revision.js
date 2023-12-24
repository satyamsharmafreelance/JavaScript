// -----------Datatype Summary------------

// Primitive - Number, String, Symbol, Boolean, Undefined, null(Full empty), BigInt
// data is given as copy


// Reference(non-primitive) - Array, Object, Functions
// direct Reference is given

// JavaScript --> Dynamically Typed Language

const num1 = 8.9
const Boolean1 = true
const notemperature = null
const id1 = Symbol(213)
const id2 = Symbol(213)
let bignumber = 7387n
// console.log(typeof bignumber);

const Bhagwan = ["Krishn", "Ram", "Narsimha"];
// console.log(Bhagwan);


let myfunction = function(){
    let num1 = 3
    let num2 = 4
    console.log(num1+num2);
}
// myfunction()


let Obj1 = {
    name : "Satyam",
    Id : 569,
    typestr : function(){
        console.log("Namo Namo");
    }
}
// console.log(Obj1);

Obj1.typestr()

// console.log(typeof Obj1);
// console.log(typeof Bhagwan);
// console.log(typeof myfunction);