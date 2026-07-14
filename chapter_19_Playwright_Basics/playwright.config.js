import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './',
    // Match both JavaScript and TypeScript test files with common spec/test suffixes
    testMatch: '**/*.{spec,specs,test}.{js,ts}',
    use: {
        // Use `browserName` (Playwright Test fixture) instead of `browser`
        browserName: 'chromium',
    },
});
