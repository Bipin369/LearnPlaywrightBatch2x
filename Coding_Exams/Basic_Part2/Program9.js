function questionName(input) {
    var totalAttemptsProcessed = 0;
    const MAX_FAILED_ATTEMPTS = 3;
    const CORRECT_USERNAME = "admin";
    const CORRECT_PASSWORD = "password123";

    let consecutiveFailures = 0;
    let isAccountLocked = false;
    let loginStatus = "PENDING";
    let index = 0;

    if (Array.isArray(input) && input.length > 0) {
        do {
            totalAttemptsProcessed++;
            let attempt = input[index];

            if (
                attempt &&
                attempt.username === CORRECT_USERNAME &&
                attempt.password === CORRECT_PASSWORD
            ) {
                consecutiveFailures = 0;
                loginStatus = "SUCCESS";
                break;
            } else {
                consecutiveFailures++;
                if (consecutiveFailures === MAX_FAILED_ATTEMPTS) {
                    isAccountLocked = true;
                    loginStatus = "LOCKED";
                    break;
                }
            }
            index++;
        } while (index < input.length);
    }

    let answer = {
        totalAttempts: totalAttemptsProcessed,
        consecutiveFailures: consecutiveFailures,
        isAccountLocked: isAccountLocked,
        status: loginStatus
    };

    return answer;
}