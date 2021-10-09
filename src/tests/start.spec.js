const {test,expect}=require('@playwright/test')

test('Starter', async({page}) => {
  await page.goto('http://localhost:3000/')

  // Verify Application Title
  await expect(page).toHaveTitle('Cypress Real World App');

});