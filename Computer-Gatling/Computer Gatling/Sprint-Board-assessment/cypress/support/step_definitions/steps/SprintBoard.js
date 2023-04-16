import data from '../../../../testData/computer_Data.json'
import computerLocator from '../../../locators/computerName.json'


class SprintBoard {
    
    static openurl(){
     cy.visit(data.computerDataBaseUrl)
    }
    static computerName(){
     cy.get(computerLocator.computerName).click()
    }
    static introducedOfComputer(){
     cy.get(computerLocator.introducedOfComputer).type(data.introducedOfComputer)
    }
    static discontinuedOfComputer(){
        cy.get(computerLocator.discontinuedOfComputer).type(data.discontinuedOfComputer)
    }
}
export default SprintBoard
