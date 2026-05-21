/* let num1 = 30;
let num2 = 20;
let maxNumb1 = num1 > num2 ? "num1 is maximum" : "num2 is maximum";
console.log(maxNumb1);

let num3 = 10;
let num4 = 20;
let num5 = 30;
let maxNumb2 = num3 > num4 ? (num3 > num5 ? "num3 is maximum" : "num5 is maximum") : (num4 > num5 ? "num4 is maximum" : "num5 is maximum");
 console.log(maxNumb2);


 let a=5;
 console.log(a++ + ++a - --a + a-- + ++a); // 5 + 7 - 6 + 6 + 6
 console.log(a) // 6 */


 let rajkumar_age = 18;
let rj_will_goa = rajkumar_age >= 18 ? "RJ will go goa" : "No Goa";
console.log(rj_will_goa)

let a = 10;
a += 10;
// a =-10; this doen't 

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "âœ… PASS" : "âŒ FAIL";
console.log(testResult);  // âœ… PASS


let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");



let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA âœ…" : "SLA breached âŒ";
console.log(`Response: ${responseTime}ms â€” ${slaStatus}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);


//  Nested Ternary

// Multiple Condition
let age = 26;
let is_pramod_goa = age > 26 ? "Yes, he will go" : "else he will not go";
console.log(is_pramod_goa);




let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log(is_pramod_d);


/// --------------------

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);


// ---- 


let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);