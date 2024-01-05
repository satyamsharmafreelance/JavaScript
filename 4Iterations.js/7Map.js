// const oneArray = [1,2,3,4,5,6,7,8,9,10]
// const oneStor = oneArray.map((item) => item + 10)
// console.log(oneStor);


// const oneArray = [1,2,3,4,5,6,7,8,9,10]
// const oneStor = oneArray.map((item) => { return item + 10})
// console.log(oneStor);

const oneArray = [1,2,3,4,5,6,7,8,9,10]
const oneStor = oneArray.map((item) => { return item * 10})
                        .map((item) => {return item + 1})
                        .filter((item) => {return item >= 40})
console.log(oneStor);
