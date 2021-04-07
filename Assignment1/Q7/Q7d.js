//         1 
//       2 3 2 
//     3 4 5 4 3
//   4 5 6 7 6 5 4
// 5 6 7 8 9 8 7 6 5

let n = 5, space=n - 1;
let  i, j, num = 1;

for ( j = 1 ; j <= n ; j++ )
{
    num = j;
    
    for ( i = 1 ; i <= space ; i++ )
        process.stdout.write("  ")
    
    space --;
    
    for ( i = 1 ; i <= j ; i++ )
    {
        process.stdout.write(`${num} `)
        num++;
    }
    num=num-2;
    
    for ( i = 1 ; i < j ; i++)
    {
        process.stdout.write(`${num} `)
        num--;
    }
    process.stdout.write("\n")
}
        
	



