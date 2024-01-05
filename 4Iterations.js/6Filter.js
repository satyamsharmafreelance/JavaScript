// const oneArray = ["Lakshmi", "Saraswati", "savitri", "Radha", "Durga"]
// const storeFE = oneArray.forEach( (oneArg) => {return oneArg})
// console.log(storeFE); // Conclusion :- undefined Not Possible


// const oneArray =[1,2,3,4,5,6,7,8,9,10]
// const storeFil = oneArray.filter(item => item > 4)
// console.log(storeFil);

// const oneArray = [1,2,3,4,5,6,7,8,9,10]
// const storeFil = oneArray.filter(item => {return item > 4})
// console.log(storeFil);

// const oneArray = [1,2,3,4,5,6,7,8,9,10]
// const emptyArray = []
// oneArray.forEach( (item) => {
//     if(item > 4){
//         emptyArray.push(item)
//     }
// })

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let bookFil = books.filter((item) => item.genre === 'History')
//   console.log(bookFil);
  
  let bookFil = books.filter((item) =>{return item.publish >= 1995 && item.genre === 'History' })
  console.log(bookFil);

  