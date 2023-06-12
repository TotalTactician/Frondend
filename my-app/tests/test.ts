import { expect, test } from '@playwright/test';

test('snapshot test', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveScreenshot();
});
