import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('bipin');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('joshi');
  await page.locator('[data-test="login-button"]').click();
});
