let num = 8;

if(num%3 === 0 && num%5 === 0)
{
    console.log(`You have entered ${num} so the result is "FizzBuzz".`);
}
else if (num%3 === 0)
{
    console.log(`You have entered ${num} so the result is "Fizz".`);
}
else if (num%5 === 0)
{
    console.log(`You have entered ${num} so the result is "Buzz".`);
}
else
{
    console.log(`You have entered ${num}, it is not muliple of 3 , 5 and 3 or 5.`);
}