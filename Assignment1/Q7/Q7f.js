//             *
//           * * *
//         * * * * *
//       * * * * * * *
//     * * * * * * * * *
//       * * * * * * *
//         * * * * *
//           * * *
//             *


let n = 5; 

for (let i = 1; i <= n; i++) {
  
  for (let j = n; j > i; j--) {
    process.stdout.write("  ")
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    process.stdout.write("* ")
  }
  process.stdout.write("\n")

}

for (let i = 1; i <= n - 1; i++) {
  
  for (let j = 0; j < i; j++) {
    process.stdout.write("  ")
  }
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    process.stdout.write("* ")
  }  
  process.stdout.write("\n")
}