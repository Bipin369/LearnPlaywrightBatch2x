import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './',
    testMatch: '**/*.specs.js',
    use: {
        browser: 'chromium',
    },
});
