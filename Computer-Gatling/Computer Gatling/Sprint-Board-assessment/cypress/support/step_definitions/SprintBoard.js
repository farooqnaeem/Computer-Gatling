import {Then} from 'cypress-cucumber-preprocessor/steps'
import SprintBoard from './steps/SprintBoard'

Then(/^The user open the url$/, function () {
    SprintBoard.openurl()
});
Then (/^The user click on computer name$/, function () {
   SprintBoard.computerName()
});
Then(/^The user enter the introduced of computer$/, function () {
 SprintBoard.introducedOfComputer()
});
Then(/^The user enter the Discontinued of computer$/, function () {
 SprintBoard.discontinuedOfComputer()
});
Then(/^The user select the company from drop down$/, function () {
SprintBoard.chooseCompanyFromDropDown()
});
Then(/^The user click on create this Computer Button$/, function () {
SprintBoard.createThisComputerButton()
});
Then(/^The user click on add new computer button$/, function () {
SprintBoard.newComputerButton()
});