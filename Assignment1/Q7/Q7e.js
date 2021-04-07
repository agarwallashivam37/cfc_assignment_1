let rows=6;

// 1
// 1  1 
// 1  2  1 
// 1  3  3   1 
// 1  4  6   4   1
// 1  5  10  10  5  1

let coef,i,j;
coef = 1;

for(i=0; i<rows; i++)
{
    for(j=0; j <= i; j++)
    {
        if (j==0 || i==0)
            coef = 1;
        else
            coef = coef*(i-j+1)/j;
        process.stdout.write(`${coef} `)        
    }
    process.stdout.write("\n")
}

