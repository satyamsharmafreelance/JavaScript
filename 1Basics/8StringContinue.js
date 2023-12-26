// const name = "Satyam"
const id = 569

// console.log(name);
// console.log(id);

// console.log(`My Name is ${name} and My Id is ${id}`);

const namestr = new String("Satyam-Vikram-Sharma") // new --> converts string into objects

// console.log(namestr[3]);
// console.log(namestr.__proto__); // speaks storgae is object
// console.log(lenstor);
// let aheap = namestr.toUpperCase()
// let aheap = namestr.indexOf("a",2)

// console.log(aheap);

const mail = new String("satyam@google.com")
// console.log(mail.substring(2,9));

const aheap = mail.slice(1,-9)
// console.log(aheap);

const whiteSpacePrePost = "          Satyam        "
// console.log(whiteSpacePrePost);
// console.log(whiteSpacePrePost.trim());

const urltest = new String("https://www.google.com//Satyam$20Sharma")
// console.log(urltest)
// console.log(urltest.replace("$20",""))

// console.log(urltest.includes("https"));
console.log(namestr.split("-"));

// -------------String done----------