function questionName(input) {
    var totalExecuted = 0;
    const testCases = Array.isArray(input) ? input : [];

    let passedCount = 0;
    let failedCount = 0;
    let errorCount = 0;
    const testResults = [];

    // 1. Process each test case using a for loop & switch statement
    for (let i = 0; i < testCases.length; i++) {
        totalExecuted++;
        const test = testCases[i];
        const name = test.name ?? `Test_${i + 1}`;
        const comparisonType = test.comparisonType;
        const actual = test.actual;
        const expected = test.expected;

        let status = "FAIL";

        if (typeof comparisonType !== "string") {
            status = "ERROR";
            errorCount++;
        } else {
            switch (comparisonType) {
                case "strictEqual":
                    status = actual === expected ? "PASS" : "FAIL";
                    break;
                case "looseEqual":
                    status = actual == expected ? "PASS" : "FAIL";
                    break;
                case "typeCheck":
                    status = typeof actual === expected ? "PASS" : "FAIL";
                    break;
                case "truthy":
                    status = !!actual ? "PASS" : "FAIL";
                    break;
                case "lessThan":
                    status = actual < expected ? "PASS" : "FAIL";
                    break;
                default:
                    status = "ERROR";
                    break;
            }

            if (status === "PASS") {
                passedCount++;
            } else if (status === "FAIL") {
                failedCount++;
            } else {
                errorCount++;
            }
        }

        testResults.push({ name, status });
    }

    // 2. Count consecutive passes from start using a while loop
    let consecutivePassesFromStart = 0;
    let whileIdx = 0;
    while (whileIdx < testResults.length && testResults[whileIdx].status === "PASS") {
        consecutivePassesFromStart++;
        whileIdx++;
    }

    // 3. Find first failure using a do...while loop
    let firstFailureName = null;
    let doIdx = 0;
    if (testResults.length > 0) {
        do {
            if (testResults[doIdx].status === "FAIL") {
                firstFailureName = testResults[doIdx].name;
                break;
            }
            doIdx++;
        } while (doIdx < testResults.length);
    }

    // Assemble the summary report
    let answer = {
        totalExecuted: totalExecuted,
        passed: passedCount,
        failed: failedCount,
        errors: errorCount,
        consecutivePassesFromStart: consecutivePassesFromStart,
        firstFailure: firstFailureName,
        results: testResults
    };

    return answer;
}