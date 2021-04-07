// Write the pseudocode & the program to calculate GCD of two numbers
const prompt = require('prompt-sync')();

let gcd;
const num1 = prompt('Enter the first no:');
const num2 = prompt('Enter the second no:');

for(let i = 1;i <= num1 && i<=num2;i++) {

    if( num1 % i == 0 && num2 % i == 0) {
        gcd = i;
    }
}

console.log(`GCD of ${num1} and ${num2} is ${gcd}.`);