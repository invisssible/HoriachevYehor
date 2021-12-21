const {Builder, By, Key, util, Actions, List, WebElement} = require("selenium-webdriver");
async function script(){
    let driver = await new Builder().forBrowser("chrome").build();
        // Getting hrmlive page
        await driver.get('https://opensource-demo.orangehrmlive.com/');

        // Inputting credentials
        await driver.findElement(By.id("txtUsername")).sendKeys("Admin", Key.ENTER);
        await driver.findElement(By.id("txtPassword")).sendKeys("admin123", Key.ENTER);

        // Opening adding user menu
        await driver.findElement(By.id("menu_admin_viewAdminModule")).click();
        await driver.findElement(By.id("menu_admin_UserManagement")).click();
        await driver.findElement(By.id("menu_admin_viewSystemUsers")).click();
        await driver.findElement(By.id("btnAdd")).click();

        // Adding user
        await driver.findElement(By.id("systemUser_employeeName_empName")).sendKeys("Admin A");
        await driver.findElement(By.id("systemUser_userName")).sendKeys("Yehor HoriachevKA-93");
        await driver.findElement(By.id("systemUser_password")).sendKeys("password");
        await driver.findElement(By.id("systemUser_confirmPassword")).sendKeys("password");
        await driver.findElement(By.id("btnSave")).click();
        await driver.sleep(4 * 1000);

        // Searching user
        await driver.findElement(By.id("searchSystemUser_userName")).sendKeys("Yehor HoriachevKA-93");
        await driver.findElement(By.id('searchSystemUser_employeeName_empName')).sendKeys("Admin A");
        await driver.findElement(By.id("searchBtn")).click();

        // Checking user
        const data = await driver.findElement(By.xpath("//td[@class='left']/a[text()='Yehor HoriachevKA-93']"));
        const row = await data.findElement(By.xpath("./../.."));
        await row.findElement(By.xpath('td[text()="ESS"]'));
        await row.findElement(By.xpath('td[text()="Admin A"]'));
        await row.findElement(By.xpath('td[text()="Enabled"]'));
        await row.findElement(By.xpath('td[1]/input')).click();
        await driver.sleep(4 * 1000);

        // Deleting user
        await driver.findElement(By.id('btnDelete')).click();
        await driver.findElement(By.id('dialogDeleteBtn')).click();
};
script();

