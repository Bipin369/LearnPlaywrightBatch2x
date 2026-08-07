function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    const cleanSuite = String(suiteName ?? '').trim();
    const cleanEnv = String(environment ?? '').trim().toLowerCase();
    const cleanBuild = String(buildNumber ?? '').trim();

    return `${cleanSuite} | ${cleanEnv} | build-${cleanBuild}`;
}