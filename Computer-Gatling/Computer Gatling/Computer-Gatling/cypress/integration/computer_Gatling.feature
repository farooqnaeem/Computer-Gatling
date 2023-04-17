
Feature: Computer Gatling Automation flow

  # The first example has click on computer name and fill the info of edit computer
Scenario: Complete flow of computer Creation.
  And The user open the url
  Then The user click on add new computer button
  And The user click on computer name
  Then The user enter the introduced of computer
  Then The user enter the Discontinued of computer
  Then The user select the company from drop down
  Then The user click on create this Computer Button


# The Second example has filter the name of created computer.
  Scenario: Filter the name of Created Computer.
