function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
    if (hasSetup === true && hasPractice === true && hasNotes === true) {
        return 'READY';
    }

    return 'BLOCKED';
}