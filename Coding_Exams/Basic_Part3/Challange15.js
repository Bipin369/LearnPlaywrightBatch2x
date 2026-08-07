function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    const passCount = Number(passed) || 0;
    const failCount = Number(failed) || 0;

    return (passCount * 2) - failCount;
}