function isValidJsBasicsIdentifier(name) {
    if (typeof name !== 'string') return false;

    const trimmed = name.trim();
    if (trimmed === '') return false;

    const reservedWords = new Set(['let', 'const', 'var', 'class', 'function', 'return']);
    if (reservedWords.has(trimmed)) return false;

    const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return identifierRegex.test(trimmed);
}