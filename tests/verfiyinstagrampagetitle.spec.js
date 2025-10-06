// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.confirmtkt.com/rbooking/');

  const title =await page.title()
   console.log("ganesh testing instagram title : "+title );
await page.waitForTimeout(5000)


});



