
Feature: End to end flow of Sprint board

  # The first example has click on computer name and fill the info of edit computer
Scenario Outline: Login to the application and complete flow of board create.
  And The user open the url
  And The user click on computer name
  Then The user enter the introduced of computer
  Then The user enter the Discontinued of computer


  Examples:
|fileName|key                   |
|profiles|estyInvalidCredentials|
