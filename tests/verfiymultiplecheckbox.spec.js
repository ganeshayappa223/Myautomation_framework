// @ts-check
import { test, expect } from '@playwright/test';

test('verfiy multiple check box functionality', async ({ page }) => {

let URL = 'https://www.letskodeit.com/practice';
await page.waitForTimeout(10000)

await page.goto(URL);
await page.locator('input#bmwcheck').check()
console.log(await page.locator('input#bmwcheck').isChecked())

await page.locator('[id="benzcheck"]').check()

await page.locator('[id="hondacheck"]').check()

console.log(await page.locator('[id="hondacheck"]').isChecked())

await page.locator('[id="bmwradio"]').check()

await page.locator('[id="benzradio"]').check()

await page.locator('[id="hondaradio"]').check()

await expect(await page.locator('input#bmwcheck').isChecked()).toBeTruthy();




});
