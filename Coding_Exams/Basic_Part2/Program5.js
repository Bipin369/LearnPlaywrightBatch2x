function questionName(input) {

    var globalCounter = 0;
    const roles = ["admin", "editor", "viewer", "tester", "manager"];
    const users = [];

    const countToGenerate = typeof input === "number" ? input : (input.count || 5);

    for (let i = 1; i <= countToGenerate; i++) {
        globalCounter++;

        const paddedId = String(i).padStart(4, "0");
        const id = `USR-${paddedId}`;
        const name = `User ${i}`;
        const email = `user${i}@example.com`;
        const role = roles[(i - 1) % roles.length];
        const isActive = i % 3 !== 0;

        users.push({
            id: id,
            name: name,
            email: email,
            role: role,
            isActive: isActive
        });
    }

    let answer = users;

    return answer;
}