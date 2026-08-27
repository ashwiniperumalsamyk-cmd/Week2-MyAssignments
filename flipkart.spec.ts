import {test} from '@playwright/test';
import {firefox} from '@playwright/test';
test('Open Flipkart in Firefox', async() => {
    //launch Firefox browser
    const browser = await firefox.launch({
       headless : false

    });
    //create a page
    const page = await browser.newPage();
    //open  Flipkart page
    await page.goto(' https://www.flipkart.com');
    //print the title
    console.log(' Flipkart Title:', await page.title());
    //print the URL
    console.log('Flipkart URL:' ,page.url());
    //close the browser
    await browser.close();
});


