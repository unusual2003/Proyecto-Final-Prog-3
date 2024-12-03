const { Builder, By, until } = require('selenium-webdriver');

(async function testGreenSaladApp() {
  
  const driver = new Builder().forBrowser('chrome').build();

  try {
    
    await driver.get('http://localhost:8000'); 


    await driver.wait(until.titleIs('Green Salad App'), 5000);

    
    const menuItems = await driver.findElements(By.css('#menu-list li'));
    console.log(`Found ${menuItems.length} menu items`);
    if (menuItems.length === 0) throw new Error("Menu items not loaded");

    
    const dishInput = await driver.findElement(By.id('dish-name'));
    const submitButton = await driver.findElement(By.css('#order-form button'));

    await dishInput.sendKeys('Selenium Salad');
    await submitButton.click();

    
    await driver.wait(until.elementLocated(By.css('#order-list li')), 2000);
    const orders = await driver.findElements(By.css('#order-list li'));
    console.log(`Orders after adding: ${orders.length}`);
    if (orders.length === 0) throw new Error("Order not added");

    
    console.log("All tests passed successfully!");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    
    await driver.quit();
  }
})();
