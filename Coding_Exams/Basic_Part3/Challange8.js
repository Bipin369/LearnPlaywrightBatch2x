function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
    const merged = {
        retries: 0,
        ...defaultConfig,
        ...overrideConfig
    };

    return merged;
}