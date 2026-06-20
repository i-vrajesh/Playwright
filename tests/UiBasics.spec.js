const{test,expect} = require('@playwright/test');
const { text } = require('stream/consumers');

test("Browser Invoke2", async ({page})=>{  
    const username = page.locator('#username');
    const password = page.locator("[type=password]");
    const submit = page.locator('#signInBtn');
    const error = page.locator("[style*='block']")
    const cardTitles = page.locator(".card-body a");

    await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await username.type("admin");//type method deprecated
    await username.fill("rahulshetty");//like sendkeys in selenium
    await password.fill("learning");
    await submit.click();
    console.log(await error.textContent());
    await expect(error).toContainText("Incorrect");
    await username.fill("rahulshettyacademy");
    await submit.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    await page.waitForLoadState('networkidle'); // wait till all api calls completed in backed
    // await page.waitForLoadState('domcontentloaded'); //wait till dom content loaded
    // await page.waitForLoadState('load'); // to pause execution until the entire web page has finished loading all its resources. 
    cardTitles.waitFor();//simply wait for that locator
    console.log(await cardTitles.allTextContents());//allTextContents method doesn't have automatic wait, bcoz we are specifically targetting to one element
});

test("Dropdowns and Radio Buttons",async({page})=>{
    await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
    await page.locator("select.form-control").selectOption("consult"); //like select class
    await page.locator(".radiotextsty").nth(1).click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").nth(1)).toBeChecked(); //assertion
    console.log(await page.locator(".radiotextsty").nth(1).isChecked()); //Returns Boolean
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect( await page.locator("#terms").isChecked()).toBeFalsy();//assertion for uncheck
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute("class","blinkingText");
    await page.pause();
});

test.only("Window Handling",async({browser})=>{
    const context = await browser.newContext(); //creating newContext
    const page = await context.newPage();
    await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
    const docLink = page.locator(".blinkingText").first();
    const [newPage,newPage2] = await Promise.all([        
        context.waitForEvent("page"),   
        docLink.click()     
    ])
    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    await page.locator("#username").fill(domain);
    await page.pause();
    console.log(await page.locator("#username").inputValue());
});

test('@Webst Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    const email = "anshika@gmail.com";
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
       if (await products.nth(i).locator("b").textContent() === productName) {
          //add to cart
          await products.nth(i).locator("text= Add To Cart").click();
          break;
       }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor(); //adding this bcoz below is visible doesn't support auto wait
    const bool = await page.locator("h3:has-text('Zara Coat 4')").isVisible(); //isVisible doesn't have auto wait
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind");//for dynamic(auto suggestive) dropdowns
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = dropdown.locator("button").count();
    for(let i=0; i<optionsCount;i++){
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === " India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    expect( page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    expect(page.locator("hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("OrderID: "+orderId);

    await page.locator("button[routerlink*='myorders']").click(); //clicking my orders button
    await page.locator("tbody").waitFor();//waiting for ordres table to diaplay
    const rows = await page.locator("tbody tr");  //listing all rows
    for (let i = 0; i < await rows.count(); ++i) {//traversing
       const rowOrderId = await rows.nth(i).locator("th").textContent();//fetching order id
       if (orderId.includes(rowOrderId)) {//comparing
          await rows.nth(i).locator("button").first().click();//clicking view button 
          break;
       }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();//storing orderid again for comparison
    expect(orderId.includes(orderIdDetails)).toBeTruthy();//assertion

    // await page.pause();
})

test('Locators',async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    //<label class="form">Check me out if you Love IceCreams!</label>
    await page.getByLabel("Check me out if you Love IceCreams!").check();//for radiobutton or checkboxes
    await page.getByLabel("Gender").selectOption("Female");
    //<input class="form" id="password" placeholder="Password" type="password"></input>
    await page.getByPlaceholder("Password").fill("admin123");
    //<input class="btn btn-success" type="submit" value="Submit">//it need not be <button> tag, btn class is enough to identify
    await page.getByRole("button",{name:'Submit'}).click();
    await page.getByText("Success").isVisible();
    await page.locator("app-card").filter({hasText:'Samsung', has:'', hasNot:'', hasNotText:'Iphone'}).click();
})

test("Calendar validations",async({page})=>
{
 
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];
    
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.goBack();
    await page.goForward();
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
 
    const inputs =  page.locator('.react-date-picker__inputGroup__input')
 
    for(let i =0; i<expectedList.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(expectedList[i]); 
    }
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    
})