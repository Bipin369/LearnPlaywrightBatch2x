function getJsBasicsKeywordMeaning(term) {
    if (typeof term !== 'string') return 'unknown';

    const normalized = term.trim().toLowerCase();

    const lookup = {
        'npm': 'package-manager',
        'v8': 'engine',
        'node': 'runtime',
        'node.js': 'runtime',
        'nodejs': 'runtime',
        'let': 'reassignable block-scoped variable',
        'const': 'block-scoped constant reference',
        'var': 'function-scoped legacy variable',
        'identifier': 'valid JS name for variables and functions',
        'literal': 'fixed value written directly in source code',
        'typeof': 'operator returning primitive type name'
    };

    return lookup[normalized] || 'unknown';
}