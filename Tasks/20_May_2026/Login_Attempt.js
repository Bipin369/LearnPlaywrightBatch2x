let login_attempts = 0;


switch(login_attempts)
{
    case 0:
    console.log(`Input: attempts =${login_attempts}`);
    console.log(`Output: Login Successful`);
    break;
    case 1:
    console.log(`Input: attempts = ${login_attempts}`);
    let new_login_attempt = login_attempts + 1;
    console.log(`Output : ${new_login_attempt} attempts left before lockout`); 
    break;
    case 2:
    console.log(`Input: attempts = ${login_attempts}`);
    let new_login_attempt_1 = login_attempts - 1;
    console.log(`Output : ${new_login_attempt_1} attempt left before lockout`); 
    break;
    case 3:
    console.log(`Input: attempts = ${login_attempts}`);
    console.log(`Output : 🔒 Account Locked — Contact support`);
    break;
    default:
    console.log(`Input: attempts = ${login_attempts}`);
    console.log(`Output : 🔒 Account Locked — Contact support`);
}