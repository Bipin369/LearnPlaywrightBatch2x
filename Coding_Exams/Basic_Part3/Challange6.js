function countPassingJsBasicsChecks(results) {
    if (!Array.isArray(results)) return 0;

    return results.filter(item =>
        typeof item === 'string' && item.toLowerCase().includes('pass')
    ).length;
}