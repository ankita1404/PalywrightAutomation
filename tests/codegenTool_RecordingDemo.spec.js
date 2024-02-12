const {test, expect} = require('@playwright/test')

test('My first test1', async({page}) => {
  await page.goto('https://www.saucedemo.com/');
  //
  await expect(page.locator('[data-test="username"]')).toBeEmpty();
  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('standard_user')

  //
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');

  //
  await page.locator('[data-test="login-button"]').click();

  await page.locator('text=Open Menu').click();
  await page.locator('text=Logout').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
  
})