// 5  5  5  5  5  5  5  5  5  
// 5  4  4  4  4  4  4  4  5
// 5  4  3  3  3  3  3  4  5  
// 5  4  3  2  2  2  3  4  5
// 5  4  3  2  1  2  3  4  5  
// 5  4  3  2  2  2  3  4  5
// 5  4  3  3  3  3  3  4  5
// 5  4  4  4  4  4  4  4  5  
// 5  5  5  5  5  5  5  5  5

let n=5;
let i,j;
for ( i = 1; i <= 2*n - 1; i++)
    {
        for ( j = 1; j <= 2*n - 1; j++)
        {
            let val=1+Math.max( Math.abs(i-n),Math.abs(j-n) )
            process.stdout.write(`${val}  `); 
	
        }
        process.stdout.write("\n");
    }