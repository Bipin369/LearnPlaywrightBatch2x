function createUniqueJsBasicsTags(tags) {
    if (!Array.isArray(tags)) return [];

    const seen = new Set();
    const result = [];

    for (const tag of tags) {
        if (typeof tag !== 'string') continue;

        const cleaned = tag.trim().toLowerCase();

        if (cleaned !== '' && !seen.has(cleaned)) {
            seen.add(cleaned);
            result.push(cleaned);
        }
    }

    return result;
}