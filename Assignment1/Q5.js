// Write a program to count the number of digits in a number.
const prompt = require('prompt-sync')();
 
let n = prompt('Enter the no:');

let count=0;
while(n!=0){    
    count++; 
    n=Math.floor(n / 10,10);      
}
console.log(count);