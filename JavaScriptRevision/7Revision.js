// Stack -------> Primitive // Copy of Snippet is given

// Heap -------> non-Primitive // Reference of Snippet is given

let name = "Satyam"
namestack = name
namestack = "Satyam Sharma"

let obj1 = {
    name : "Satyam",
    Rollno : 23
}

objheap = obj1
objheap.name = "Satyam Sharma"

console.log(objheap);
console.log(obj1);

// Array do not follow Heap

