// Write a program to reverse a number (9735 -> 5379)
const prompt = require('prompt-sync')();
 
let num = prompt('Enter the no:');

let reverse=0;
while(num != 0) {    
    let digit = num % 10;
    reverse = reverse * 10 + digit;    
    num=Math.floor(num/10);
  }
  console.log(reverse)