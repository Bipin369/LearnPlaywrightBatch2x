function summarizeJsBasicsResults(results) {
    if (!Array.isArray(results)) {
        return { total: 0, passed: 0, failed: 0, skipped: 0 };
    }

    const summary = {
        total: results.length,
        passed: 0,
        failed: 0,
        skipped: 0
    };

    for (const item of results) {
        if (typeof item !== 'string') continue;

        const normalized = item.toLowerCase();

        if (normalized.includes('pass')) {
            summary.passed++;
        } else if (normalized.includes('fail')) {
            summary.failed++;
        } else if (normalized.includes('skip')) {
            summary.skipped++;
        }
    }

    return summary;
}