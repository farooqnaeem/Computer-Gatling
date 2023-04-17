Feature: Computer Gatling filter flow

# The Second example has filter the name of created computer.
Scenario: Filter the name of Created Computer.
Then The user enter the computer name in filter field.
  Then The user click on filter by Name Button
  Then The user click on computer gatling icon