function buildJsBasicsChecklist(items) {
    if (!Array.isArray(items)) return [];

    const checklist = [];
    let index = 1;

    for (const item of items) {
        if (typeof item !== 'string') continue;

        const trimmed = item.trim();

        if (trimmed !== '') {
            checklist.push(`${index}. ${trimmed} - TODO`);
            index++;
        }
    }

    return checklist;
}