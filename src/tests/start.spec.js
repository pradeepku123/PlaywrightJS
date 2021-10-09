const {test,expect}=require('@playwright/test')

test('Starter', async({page}) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});