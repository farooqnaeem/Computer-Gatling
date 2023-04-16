import {Then} from 'cypress-cucumber-preprocessor/steps'
import SprintBoard from './steps/SprintBoard'
import sprintBoard from "./steps/SprintBoard";

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