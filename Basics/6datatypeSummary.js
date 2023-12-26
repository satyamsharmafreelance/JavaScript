// Primitive Datatype
// ---> copy of original data is provided
//String, Number, Boolean, null(full empty), symbol, BigInt, undefined

const chacha1 = 100;
const chacha2 = 100.3;

const kaiseho = true
const buredin = null

let undefinedcheckkaro;

const Id1 = Symbol("987")
const Id2 = Symbol("987")

// console.log(Id1 === Id2);

const bigNumber =54648965n;

// console.log(bigNumber);
// console.log(typeof bigNumber);

// non- primitive Datatype
//--> reference of original data is provided
// Arrays, Objects, Functions

const ekArray = ["Mohan", "Madhav", "Sakhi"]
// console.log(ekArray);

const ekobj = {
    Name : "Satyam",
    Age : "21"
}
// console.log(ekobj);

let ekfunction = function(){
    console.log(ekobj);
}
// ekfunction()

let ekobj1 = {
    name : function(){
        console.log("Maa lakshmi mujhme sadachaar bhar do");
    }
}
// ekobj1.name()

// console.log(typeof mohit); --> undefined

// console.log(typeof ekobj1);
// console.log(typeof ekArray);
// console.log(typeof ekfunction);

// JAVASCRIPT --> Dynamically  typed Language

// +++++++++++++++++++Memory+++++++++++++++++++++

let Ekstack = "Satyam"
Ekstackcopy = Ekstack

// console.log(Namehu);
copynamehu = "Satyam Sharma"
// console.log(copynamehu);

let Ekheap = ["Madhav", "Radhe", "Mohit"]
Ekheapcopy = Ekheap
// console.log(Ekheap);
Ekheapcopy = ["Govind"] //---> array me Reference Value Change nhi hue hai
// console.log(Ekheapcopy);
// console.log(Ekheap);

let ekheapaur = {
    Name  : "Pyare",
    age : 10
}
ekheapaurcopy = ekheapaur
// console.log(ekheapaurcopy);
// console.log(ekheapaur);
ekheapaurcopy.Name = "pyare lal"

// console.log(ekheapaurcopy);
// console.log(ekheapaur); // ---> HEAP yaha Ache se kaam karta hai

let ekfunctionaur = function(){
    maaradhe = "Radhe"
    console.log(maaradhe);
}

let ekfunctionaurcopy =function(){ ekfunctionaur()}
ekfunctionaur()
ekfunctionaurcopy()


