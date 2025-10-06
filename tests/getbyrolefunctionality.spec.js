

import { test, expect } from '@playwright/test';

test('verfify drop down functionality', async ({ page }) => {

let URL = 'https://rahulshettyacademy.com/AutomationPractice/';

await page.goto(URL);

let title = await page.title();

await expect (title).toBe('Practice Page')

await page.getByRole("heading",{name:'Practice Page'}).isVisible();

const buttonopen= page.getByRole('button',{name:'Open Window'});

await buttonopen.click();


});

