import {test} from '@playwright/test';
import { chromium } from '@playwright/test';

test('Open Red Bus in Edge', async() => {
    //launch Edge browser
    const browser = await chromium.launch({
        channel : 'msedge',
        headless : false

    });
    //create a page
    const page = await browser.newPage();
    //open red bus
    await page.goto('https://www.redbus.in');
    //print the title
    console.log('Red Bus Title:', await page.title());
    //print the URL
    console.log('Red Bus URL:' ,page.url());
    //close the browser
    await browser.close();
});
