function questionName(input) {

    const { isPresent, isDisplayed, isEnabled } = input;

    let state = "";
    if (isPresent === true && isDisplayed === true && isEnabled === true) {
        state = "READY";
    } else if (isPresent === true && isDisplayed === true && isEnabled === false) {
        state = "DISABLED";
    } else if (isPresent === true && isDisplayed === false) {
        state = "HIDDEN";
    } else {
        state = "NOT FOUND";
    }

    const severity = isPresent === false
        ? "CRITICAL"
        : (isDisplayed === false || isEnabled === false ? "WARNING" : "OK");

    let action = "";
    if (state === "READY") {
        action = "Proceed with interaction";
    } else if (state === "DISABLED") {
        action = "Wait for element to be enabled";
    } else if (state === "HIDDEN") {
        action = "Wait for element to become visible";
    } else {
        action = "Check locator or page load status";
    }

    let answer = `State: ${state}, Severity: ${severity}, Action: ${action}`;

    return answer;
}