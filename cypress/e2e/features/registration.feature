Feature: User register journey

Scenario: Verify user register sucessfully
Given I am on register page
When I enter all required fields details
Then I should login sucessfully

Scenario: API validation  
Given I GET list of users available
When I validate a response code to be 200
Then I should see specific data availble to me