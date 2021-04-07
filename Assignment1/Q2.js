//Write the pseudocode & a program to calculate the simple interest 
// based on the inputs(amount, rate, time) provided by the user.
const prompt = require('prompt-sync')();
 
const amount = prompt('Enter amount:');
const rate = prompt('Enter rate:');
const time = prompt('Enter time:');

const interest=(amount*rate*time)/100;

console.log("Simple Interest:"+interest);