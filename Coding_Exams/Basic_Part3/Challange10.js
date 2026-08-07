function findFirstCriticalJsBasicsBug(bugs) {
    if (!Array.isArray(bugs)) return "No critical bug";

    const criticalBug = bugs.find(
        bug => bug && typeof bug.severity === 'string' && bug.severity.trim().toLowerCase() === 'critical'
    );

    return criticalBug && criticalBug.title ? criticalBug.title : "No critical bug";
}