let score = 0;

if (score === 100)
{
    console.log(`Input: ${score}`);
    console.log(`Output: 🟢  Green Build`)
}
else if(score >= 90 && score <=99)
{
    console.log(`Input: ${score}`);
    console.log(`Output: 🟡  Stable — Investigate failures`)
}
else if(score <= 89 && score >=70)
{
    console.log(`Input: ${score}`);
    console.log(`Output: 🟠  Unstable`)
}
else
{
     console.log(`Input: ${score}`);
     console.log(`Output: 🔴  Broken Build — Block deployment`)
}