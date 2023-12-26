let ekdate = new Date();

// console.log(ekdate);
// console.log(ekdate.toString());
// console.log(ekdate.toISOString());
// console.log(ekdate.toJSON());
// console.log(ekdate.toLocaleDateString());
// console.log(ekdate.toLocaleString());
// console.log(ekdate.toDateString());

// console.log(typeof ekdate);

let przntdate = new Date(2023,11,26,12,36)

// console.log(przntdate.toDateString());
// console.log(przntdate.toDateString());

przntDateinString = new Date('2023,12,26')
// przntDateinString = new Date('12,26,2023')
// console.log(przntDateinString.toLocaleString());

let przntdatenow = Date.now()
let previoudate = new Date(2022,11,26)

// console.log(przntdatenow);
// console.log(previoudate.getTime());

// console.log(Math.round(Date.now()/1000));

let NormalDate = new Date()
// console.log(NormalDate.getMonth());
console.log(NormalDate.getDay());
console.log(NormalDate.toLocaleString('default',{
    weekday : "long"
}));

