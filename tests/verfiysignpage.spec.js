
import { test, expect } from '@playwright/test';

test.only('Tc_01: verfiy the sign page', async ({page}) => {

let url ='https://www.prople.pro/#/login';

await page.goto(url);
//verfiy the page in two methods

let pagetitle =await page.title();

//await console.log(pagetitle)

await expect(pagetitle).toBe('PROPLE - HRMS')

/*let urlofthepage =page.url();
await expect (url).toBe(urlofthepage)*/

const logo = page.locator('[src="https://www.prople.pro/assets/prople_1-DBiwz8Hf.png"]');

const welocmeback =page.getByRole('heading',{name:'Welcome Back'});

const bankgradesecurity =page.getByRole('heading',{name:'Bank-Grade Security'});

const uptimeclass =page.getByRole('heading',{name: 'Uptime'});

//const headersignin =page.getByRole('heading',{name: 'text-3xl font-bold text-gray-800 mb-2'});

const emailaddress =page.getByPlaceholder('john@company.com');

//const passwordtextbox=page.getByRole('heading',{name:'password'});


await expect (logo).toBeVisible();


await expect (welocmeback).toBeVisible();


await expect (bankgradesecurity).toBeVisible();


await expect (uptimeclass).toBeVisible();


//await expect (headersignin).toBeVisible();


await expect (emailaddress).toBeVisible();


//await expect (passwordtextbox).toBeVisible();



})







