// function chai (){
//     console.log("DB Connected");
// }

// chai()


// (function chai (){
//     console.log("DB Connected");
// })(); // Sometimes Global Scopes Create Issues to Remove That, we use IIFE

// (function chaiDobara(){
//     console.log("DB Connected in Arrow");
// })()

(function chai (){
    console.log("DB Connected");
})(); // Sometimes Global Scopes Create Issues to Remove That, we use IIFE

// (() => {
//     console.log("DB Connected in Arrow");
// })();

((name1, name2) => {
    console.log(`DB Connected in Arrow, with ${name1} and ${name2}`);
})("Satyam", "Hitesh");

