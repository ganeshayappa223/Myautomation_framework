
import { test, expect } from '@playwright/test';

test('verfify get by functionalitly', async ({ page }) => {

let URL = 'https://www.letskodeit.com/practice';

await page.goto(URL);

let title = await page.title();
//verfiy the lacator

 const autosuggest =page.getByPlaceholder ("Start Typing...")

await autosuggest.fill("ganesh");

await page.waitForTimeout(4000)

const radiobutton =page.getByLabel ('honda')

await radiobutton.click();

await page.waitForTimeout(10000)

const switchwindow =page.getByRole('button',{name:'Open Window'});

await switchwindow.click();

await page.waitForTimeout(9000)

const checkboxtext =page.getByAltText("Checkbox Example");

await expect(checkboxtext).check();

await page.waitForTimeout(9000) 

});

