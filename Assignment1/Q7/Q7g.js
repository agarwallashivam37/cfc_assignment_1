// *                 * 
// * *             * *
// * * *         * * *
// * * * *     * * * * 
// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * * 
// * *             * *
// *                 *
let n=5;
let row=1;
while(row<=n)
{
    let column=1;
    while(column<=row)
    {
        process.stdout.write("* ");
        column+=1;
    }
    column=n-row;
    while(column>0)
    {
        process.stdout.write("  ");
        column-=1;
    }
    column=n-row;
    while(column>0)
    {
        process.stdout.write("  ");
        column-=1;
    }
    column=1;
    while(column<=row)
    {
        process.stdout.write("* ");
        column+=1;
    }
    process.stdout.write("\n");
    row+=1;
}
row=4;
while(row>0)
{
    column=row;
    while(column>0)
    {
        process.stdout.write("* ");
        column-=1;
    }
    column=n-row;
    while(column>0)
    {
        process.stdout.write("  ");
        column-=1;
    }
    column=n-row;
    while(column>0)
    {
        process.stdout.write("  ");
        column-=1;
    }
    column=row;
    while(column>0){
        process.stdout.write("* ");
        column-=1;
    }
    process.stdout.write("\n");
    row-=1;
}