function questionName(input) {
    let passed = 0;
    let failed = 0;
    let skipped = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "pass") {
            passed++;
        } else if (input[i] === "fail") {
            failed++;
        } else if (input[i] === "skip") {
            skipped++;
        }
    }

    const total = input.length;
    const passRate = total > 0 ? (passed / total) * 100 : 0;

    let verdict = "";
    if (failed === 0) {
        verdict = "ready for release";
    } else if (failed <= 2) {
        verdict = "review";
    } else {
        verdict = "block release";
    }

    let answer = `Total: ${total}, Passed: ${passed}, Failed: ${failed}, Skipped: ${skipped}, Pass Rate: ${passRate}%, Verdict: ${verdict}`;
    return answer;
}