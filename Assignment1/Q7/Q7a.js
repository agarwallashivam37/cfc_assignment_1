// *
// * *
// * * *
// * * * *
// * * * * * 

let n = 5; 
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {    
    process.stdout.write("* ")
  }
  process.stdout.write("\n")
}