const homePage = require('../pageobjects/home.page');
const mainPage = require('../pageobjects/form.page');
const { Builder} = require('selenium-webdriver');
const { fillName,fillAddress } = require('../pageobjects/form.page');

describe('Fill in practice form ', () => {

    it('User should be able to fill in student registration form', () => {
        
        // All selectors
        const inputGender = $('//input[@id="gender-radio-1"]').get(0); 
        const inputHobbies = $('//input[@id="hobbies-checkbox-1"]').get(0);
        const form = $('//form[@id="userForm"]');
        const buttonSubmit = $('//button[@id="submit"]');
        // Fill in form 
        let driver = await new Builder.forBrowser("chrome").build();

        // Load url https://demoqa.com/
        await.driver.get("https://demoqa.com/");

        // Navigate to Forms -> practice forms
        homePage.buttonForms.click();
        homePage.buttonPracticeForms.click();
        driver.wait(function () {
            return driver.isElementPresent(form);
        }, timeout);
    //    browser.pause(3000);

        // Check the form isnt filled in
        expect(inputUserNumber.getText()).toBe("");

        // Fill in form
        fillName('Jane','Smith');
        fillAddress('automation-test@tester.com','1234567891','52 Chaucer street');
        inputGender.click();
        inputHobbies.click();
        buttonSubmit.click();

    })
})