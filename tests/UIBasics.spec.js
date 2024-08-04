const {test, expect} =require('@playwright/test');
const { LoginPage } = require('../pageObjects/loginPage');


test(`@UI FirstTestCase of Play wright test`, async function({browser}){


const context = await browser.newContext();
 const page =await context.newPage();

 await page.goto("https://www.saucedemo.com/")

  await console.log( await page.title());

await expect(page).toHaveTitle("Swag Labs");
 const loginPage = new LoginPage(page);
//await page.locator("#user-name").fill("standard_user");
//await page.locator("#password").fill("secret_sauce1");
await loginPage.loginApp("standard_user","secret_sauce1")
//await page.locator("#login-button").click();

console.log("Hey riyaz the  error message is "+ await page.locator("[data-test='error']").textContent());



}
);

test('@UI Second case of Play wright test', async function({browser}){


    const context = await browser.newContext();
     const page =await context.newPage();
    
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    
     await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");


    }
    );