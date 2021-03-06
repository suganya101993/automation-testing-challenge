const Page = require('./main.page');

class formPage extends Page {

    // contains all selectors for the page 
   
    get inputFirstName () { return $('//input[@id="firstName"]') }
    get inputLastName () { return $('//input[@id="lastName"]') }
    get inputUserEmail () { return $('//input[@id="userEmail"]') }
    get inputUserNumber () { return $('//input[@id="userNumber"]') }
    get inputaddress () { return $('//textarea[@id="currentAddress"]') }
    // Contains all methods for naviagting on the page
    
    fillName(firstName, lastName){
        this.inputFirstName.setValue(firstName);
        this.inputLastName.setValue(lastName);
    }
    fillAddress(email,mobileNumber,address){
        this.inputUserEmail.setValue(email);
        this.inputUserNumber.setValue(mobileNumber);
        this.inputaddress.setValue(address);
    }
    
    open () {
        return super.open();
    }
}

module.exports = new formPage();
