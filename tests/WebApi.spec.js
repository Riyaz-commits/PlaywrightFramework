const {test,expect} = require("@playwright/test");
 
 
test("Calendar validations",async({page})=>
{
 
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [ monthNumber, date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
console.log("Calender launched")
await page.locator(".react-date-picker__inputGroup").click();
console.log("Calender click")
//await page.locator(".react-date-picker__inputGroup").click();

const buttonLocator = "button[class='react-calendar__navigation__arrow react-calendar__navigation__next2-button']";

for (let i = 0; i < 3; i++) {
  await page.locator(buttonLocator).click();
}
await page.getByText(year).click();
await page.locator("button[class='react-calendar__tile react-calendar__year-view__months__month']").nth(Number(monthNumber)-1).click();
console.log("Calender click")
await page.locator("//abbr[text()="+date+"]").click();

const inputs = await page.locator(".react-date-picker__inputGroup input");
await page.getByText("Page size:").click();
const sizeval = await inputs.count();
console.log(sizeval);

function getValueAtIndex(index) {
    switch (index) {
        case 1:
            return expectedList[0]; // Return monthNumber
        case 2:
            return expectedList[1]; // Return date
        case 3:
            return expectedList[2]; // Return year
        default:
            return null; // Handle invalid index (optional)
    }
}

for (let index =0; index < 4; ++index)

   {    
    index = index+1;
    const value = await inputs.nth(index).getAttribute("value"); // Corrected to use .nth(index)

    await expect(value).toEqual(getValueAtIndex(index));
    console.log("Value:", value);
    console.log("Expected:", getValueAtIndex(index));
    
    }
console.log("Completed click");

await page.getByText("Page size:").isDisabled();


})


/* 
"scripts": {
    "test": "npx playwright test tests/WebApi.spec.js --headed"
    
 }, 
 
 add this in package.json 
 */