
let zero = 0;
let counter = 3;
let my = ["Ahmed" , "Mazero" , "Elham" , "Osama" , "Gamal" , "Ameer"];

console.log(my.slice(zero, ++counter).reverse()); // [ "Osama", "Elham", "Mazero", "Ahmed" ]
console.log(my.slice(++zero,--counter).reverse()); // [ "Elham", "Mazero" ]
console.log(my[--counter].slice( --zero , counter) + my[++zero].slice(counter++));// "Elzero"
console.log(my[zero].charAt(++counter) + my[--counter].charAt(--zero)); //rO
