const {test, expect} = require('@playwright/test')

//const{hello, helloworld} = require('./demo/hello')

/*console.log (hello());
console.log(helloworld());
console.log ("TEST"); */

test('My first test', async({page}) => {

    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google');
})



 
