function questionName(input) {

    let attempts = 0;
    let maxRetries = 5;
    let success = false;
    let logs = [];

    do {
        attempts++;
        let randomValue = Math.random();
        if (randomValue > 0.6) {
            success = true;
            logs.push(`Attempt ${attempts}: Success`);
        } else {
            logs.push(`Attempt ${attempts}: Failed`);
        }
    } while (!success && attempts < maxRetries);

    let finalStatus = success ? "API call succeeded" : "API call failed after max retries";
    let answer = {
        attempts: attempts,
        success: success,
        logs: logs,
        result: finalStatus
    };

    return answer;
}