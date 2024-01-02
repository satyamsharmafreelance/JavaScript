// const oneArray = [1,2,3,4,5]

// for (const num of oneArray) {
//     console.log(num);
// }

// const oneString = "Namah Aste"
// for (const stri of oneString) {
//     console.log(stri);   
// }

const forMap = new Map()
forMap.set('JavaScript', "JS")
forMap.set('Python', "py")
forMap.set('Satyam', "Sharma")
forMap.set('JavaScript', "JS")

// console.log(forMap);

for (const [key, value] of forMap) {
    console.log(`Key of Map = ${key}, Value of Map = ${value}`);
}

// const myObject = {
//     State1 : 'Maharashtra',
//     State2 : 'Gujrat'
// }

// for (const [key,value] of myObject) {
//     console.log(key, value);
// }

// forof ---> is not possible on objects
