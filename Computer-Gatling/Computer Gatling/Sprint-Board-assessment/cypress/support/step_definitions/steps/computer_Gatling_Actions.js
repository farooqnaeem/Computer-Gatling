import data from '../../../../testData/computer_Data.json'
import computerLocator from '../../../locators/computerName.json'


class Computer_Gatling_Actions {
    
    static openurl(){
     cy.visit(data.computerDataBaseUrl)
    }
    static newComputerButton(){
        cy.get(computerLocator.newComputerButton).click()
    }

    static computerName(){
     cy.get(computerLocator.computerName).type(data.computerName)
    }
    static introducedOfComputer(){
     cy.get(computerLocator.introducedOfComputer).type(data.introducedOfComputer)
    }
    static discontinuedOfComputer(){
        cy.get(computerLocator.discontinuedOfComputer).type(data.discontinuedOfComputer)
    }
    static chooseCompanyFromDropDown(){
        cy.get(computerLocator.chooseCompanyFromDropDown).select(data.chooseCompanyFromDropDown)
    }
    static createThisComputerButton(){
        cy.get(computerLocator.createThisComputerButton).click()
    }
}
export default Computer_Gatling_Actions
