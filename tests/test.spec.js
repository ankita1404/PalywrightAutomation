  
  await page.goto('https://www.saucedemo.com/');
  //
  await expect(page.locator('[data-test="username"]')).toBeEmpty();
  //
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('standard_user');

  //
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="login-button"]').fill('secret_sauce');