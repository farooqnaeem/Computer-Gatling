
Feature: End to end flow of Sprint board

  # The first example has click on computer name and fill the info of edit computer
Scenario Outline: Login to the application and complete flow of board create.
  And The user open the url
  Then The user click on add new computer button
  And The user click on computer name
  Then The user enter the introduced of computer
  Then The user enter the Discontinued of computer
  Then The user select the company from drop down
  Then The user click on create this Computer Button


  Examples:
|fileName|key                   |
|profiles|estyInvalidCredentials|
