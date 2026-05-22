let side1 = 20;
let side2 = 20;
let side3 = 20;

if(side1 === side2 && side2 === side3)
{
    console.log("Its an equilateral Triangle(all sides are equal)");
}
else if(side1 === side2 || side2 === side3 ||  side3 === side1)
{
    console.log("Its an Isoceles Triangle(exactly two sides are equal)");
}
else
{
    console.log("Its an Scalene Triangle(no sides are equal)");
}