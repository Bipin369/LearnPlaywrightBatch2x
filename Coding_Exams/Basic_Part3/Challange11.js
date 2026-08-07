function summarizeJsBasicsMatrix(matrix) {
    const summary = {
        total: 0,
        passed: 0,
        failed: 0,
        failedCases: []
    };

    if (!Array.isArray(matrix)) return summary;

    for (const row of matrix) {
        if (!Array.isArray(row)) continue;

        for (const cell of row) {
            if (typeof cell !== 'string') continue;

            summary.total++;
            const lowerCell = cell.toLowerCase();

            if (lowerCell.includes('pass')) {
                summary.passed++;
            } else if (lowerCell.includes('fail')) {
                summary.failed++;
                summary.failedCases.push(cell);
            }
        }
    }

    return summary;
}