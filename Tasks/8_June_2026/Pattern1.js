let n = 4;

for (let i = 0; i <= n; i++) 
{
  let row = " ";
   for (let j = 4; j >= i; j--) 
   {
        row += "*";
   }
    console.log(row);
}