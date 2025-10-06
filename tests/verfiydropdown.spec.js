
import { test, expect } from '@playwright/test';

test('verfify drop down functionality', async ({ page }) => {

let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
await page.waitForTimeout(8000)

await page.goto(URL);

const dropdown = await page.locator('[id="dropdown-class-example"]');

await page.waitForTimeout(4000)

await dropdown.selectOption("Option1")

await page.waitForTimeout(4000)

await dropdown.selectOption("Option2")

await page.waitForTimeout(4000)

await dropdown.selectOption("Option3")

await page.waitForTimeout(6000)

});

