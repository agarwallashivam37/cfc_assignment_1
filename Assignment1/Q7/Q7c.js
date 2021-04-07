//         1 
//       1 2 1 
//     1 2 3 2 1 
//   1 2 3 4 3 2 1 
// 1 2 3 4 5 4 3 2 1

let i,j,k,m;

    for(i=1;i<=5;i++){          
        for(j=1;j<=5-i;j++){
            process.stdout.write("  ")        
        }
        for(k=1;k<=i;k++){      
            process.stdout.write(`${k} `);
        }
        for(m=i-1;m>0;m--){     
            process.stdout.write(`${m} `);
        }
        process.stdout.write("\n");           
    }
