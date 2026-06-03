function checkPalindrome(str)
{
    let reversedStr = "";
    for (let i = str.length -1; i>=0; i--)
{
    reversedStr += str[i];
}
console.log("Main String is ", str.toLowerCase());
console.log("Reversed String is ", reversedStr.toLowerCase());

if (str.toLowerCase() ===  reversedStr.toLowerCase())
{
    console.log("String is Palindrome");
    
}
else
    {
     console.log("String is not Palindrome");
}

}

checkPalindrome("Bipin");
checkPalindrome("Niwin");