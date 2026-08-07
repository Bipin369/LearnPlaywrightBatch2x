function filterSupportedJsBasicsTopics(topics) {
    if (!Array.isArray(topics)) return [];

    // Map known aliases directly to their canonical short terms
    const aliasToCanonical = {
        'node': 'node',
        'node.js': 'node',
        'nodejs': 'node',
        'runtime': 'node',
        'v8': 'v8',
        'engine': 'v8',
        'npm': 'npm',
        'package-manager': 'npm',
        'let': 'let',
        'const': 'const',
        'var': 'var',
        'identifier': 'identifier',
        'identifiers': 'identifier',
        'literal': 'literal',
        'literals': 'literal',
        'typeof': 'typeof'
    };

    const result = [];
    const seen = new Set();

    for (const topic of topics) {
        if (typeof topic !== 'string') continue;

        const normalized = topic.trim().toLowerCase();
        const canonical = aliasToCanonical[normalized];

        if (canonical && !seen.has(canonical)) {
            seen.add(canonical);
            result.push(canonical);
        }
    }

    return result;
}