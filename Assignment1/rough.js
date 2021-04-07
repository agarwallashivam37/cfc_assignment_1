// let n = 5; 
// for (let i = 1; i <= 2*n; i++) {
//     if(i<=n){
//         for (let j = 0; j < i; j++) {    
//             process.stdout.write("* ")
//         }
//     }else{
//         for (let j = 2*n; j > i; j--) {    
//             process.stdout.write("* ")
//         }
//     }
//   process.stdout.write("\n")
// }
// var n=5;
// let i=0;
// let row_mirr=5;
// while(i<2*n){
//     let j=0;
//     while(j<=i){
//         process.stdout.write("* ")
//         j++;
//     }
//     if(i<=n){
//         i++;
//     }else{
//         i--;
//     }
//     process.stdout.write("\n")
    

// }
const prompt = require('prompt-sync')();
 
const name = prompt('What is your name?');
console.log(`Hey there ${name}`);