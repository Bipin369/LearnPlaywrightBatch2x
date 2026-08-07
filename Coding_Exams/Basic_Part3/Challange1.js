function normalizeJsBasicsLabel(label) {
    if (typeof label !== 'string') return 'js-basic';

    const cleaned = label
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return cleaned ? `js-basic-${cleaned}` : 'js-basic';
}