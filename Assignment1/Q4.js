// Write a program to print even numbers after odd times jump. 
// E.g: 2, 6, 14, 26, …
const prompt = require('prompt-sync')();
 
const n = prompt('Enter your value of n:');

let val=2,count=0,i=1;
while(count<n){
    console.log(val);
    val +=(2*i)+2;
    count++;
    i=i+2;
}