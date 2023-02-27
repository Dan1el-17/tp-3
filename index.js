const readline = require("readline-sync")

// console.log("=======================");
// console.log("      Ejercicio 1      ");
// console.log("=======================");

// const word = readline.question("write a word: ")

// for (let i = 0; i < 10; i++) {
//     console.log(word);
// }

// console.log("");
// console.log("=======================");
// console.log("      Ejercicio 2      ");
// console.log("=======================");

// const age = readline.question("Age? (only numeric value): ")

// if (!isNaN(age)) {
//     for (let i = 1; i <= age; i++) {
//         console.log(i);
//     }
// } else {
//     console.log("The value isn't numeric");
// }



// console.log("");
// console.log("=======================");
// console.log("      Ejercicio 3      ");
// console.log("=======================");

// const integer = readline.question("Positive integer: ")

// let numbers = [];

// if (integer > 0 && !isNaN(integer)) {
//     for (let i = 1; i <= integer; i++) {
//         let resto = i % 2;
//         if (resto != 0) {
//             numbers.push(i)
//         }
//     }
//     console.log(numbers);
// } else {
//     console.log('The input is negative, 0 or not a numeric value');
// }

console.log("");
console.log("=======================");
console.log("      Ejercicio 4      ");
console.log("=======================");

const secondInteger = readline.question("Positive integer: ")

if (secondInteger > 0 && !isNaN(secondInteger)) {
    for (let i = 1; i <= secondInteger; i++) {
        console.log('*'.repeat(i));
    }
} else {
    console.log('The input is negative, 0 or not a numeric value');
}