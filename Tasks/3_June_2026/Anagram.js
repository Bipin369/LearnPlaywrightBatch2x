function checkAnagram(s1,s2){

    let str1 = s1.toLowerCase().split("").sort().join(" ");
    let str2 = s2.toLowerCase().split("").sort().join(" ");

    if (str1 === str2) {
        console.log("Strings are Anagrams");
    } else {
        console.log("Strings are not Anagrams");
    }
}


checkAnagram("eat","tea");
checkAnagram("Form1","from");
checkAnagram("Form","from");


