import {Then} from 'cypress-cucumber-preprocessor/steps'
import Computer_Gatling_Actions from './steps/computer_Gatling_Actions'

Then(/^The user open the url$/, function () {
    Computer_Gatling_Actions.openurl()
});
Then (/^The user click on computer name$/, function () {
   Computer_Gatling_Actions.computerName()
});
Then(/^The user enter the introduced of computer$/, function () {
 Computer_Gatling_Actions.introducedOfComputer()
});
Then(/^The user enter the Discontinued of computer$/, function () {
 Computer_Gatling_Actions.discontinuedOfComputer()
});
Then(/^The user select the company from drop down$/, function () {
Computer_Gatling_Actions.chooseCompanyFromDropDown()
});
Then(/^The user click on create this Computer Button$/, function () {
Computer_Gatling_Actions.createThisComputerButton()
});
Then(/^The user click on add new computer button$/, function () {
Computer_Gatling_Actions.newComputerButton()
});