// 8:21 - hari om
let hero = ["maa", "pita", "bhai", "behan"]
let aurhero = ["Nana", "Nani", "Dada", "Dadi"]

// hero.push(aurhero)

// console.log(hero);
// console.log(hero[4][0]);

// const saareHero = hero.concat(aurhero)
// console.log(hero.concat(aurhero));

const spreadSaareHero = [...hero, ...aurhero]
// console.log(spreadSaareHero);

const nestArray = [1,2,3,[6,3],9,8,[2,6,1,[0o1,0o2,0o3]]]

const flatNestArray = nestArray.flat(1)
const flatNestArrayInfinity = nestArray.flat(Infinity)

// console.log(nestarray);
// console.log(flatNestArray);
// console.log(flatNestArrayInfinity);

// console.log(Array.isArray("satyam"));
// console.log(Array.from("satyam"));
// console.log(Array.from({ age : "Twenty",location : "Mumbai"})); // Not Possible

let num1 = 20
let num2 = 240
let num3 = 2290

// console.log(Array.of(num1, num2,num3));

// ---------- Array Done -----------
// 8:43