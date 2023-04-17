import {Then} from 'cypress-cucumber-preprocessor/steps'
import Computer_Gatling from './steps/computer_Gatling_Actions'
import computer_Gatling_Actions from "./steps/computer_Gatling_Actions";

Then(/^The user open the url$/, function () {
    Computer_Gatling.openurl()
});
Then (/^The user click on computer name$/, function () {
   Computer_Gatling.computerName()
});
Then(/^The user enter the introduced of computer$/, function () {
 Computer_Gatling.introducedOfComputer()
});
Then(/^The user enter the Discontinued of computer$/, function () {
 Computer_Gatling.discontinuedOfComputer()
});
Then(/^The user select the company from drop down$/, function () {
Computer_Gatling.chooseCompanyFromDropDown()
});
Then(/^The user click on create this Computer Button$/, function () {
Computer_Gatling.createThisComputerButton()
});
Then(/^The user click on add new computer button$/, function () {
Computer_Gatling.newComputerButton()
});
Then(/^The user enter the computer name in filter field\.$/, function () {
Computer_Gatling.filterName()
});
Then(/^The user click on filter by Name Button$/, function () {
Computer_Gatling.filterByNameButton()
});
Then(/^The user click on computer gatling icon$/, function () {
Computer_Gatling.computerGatlingIcon()
});