function questionName(input) {

    let baseUrl, apiKeyPrefix, timeout, description;

    const env = typeof input === "string" ? input.toLowerCase() : "";

    switch (env) {
        case "dev":
            baseUrl = "https://dev.api.example.com";
            apiKeyPrefix = "DEV-KEY-";
            timeout = 5000;
            description = "Development Environment";
            break;
        case "staging":
            baseUrl = "https://staging.api.example.com";
            apiKeyPrefix = "STG-KEY-";
            timeout = 10000;
            description = "Staging Environment";
            break;
        case "qa":
            baseUrl = "https://qa.api.example.com";
            apiKeyPrefix = "QA-KEY-";
            timeout = 8000;
            description = "QA Environment";
            break;
        case "production":
        case "prod":
            baseUrl = "https://api.example.com";
            apiKeyPrefix = "PROD-KEY-";
            timeout = 15000;
            description = "Production Environment";
            break;
        default:
            baseUrl = "https://localhost:8000";
            apiKeyPrefix = "LOCAL-KEY-";
            timeout = 3000;
            description = "Unknown or Default Local Environment";
    }

    let answer = {
        baseUrl: baseUrl,
        apiKeyPrefix: apiKeyPrefix,
        timeout: timeout,
        description: description
    };
    return answer;
}