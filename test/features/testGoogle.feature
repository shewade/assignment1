Feature: Test validity of search results on google
    Test google search results for validity

Scenario: Visit google search page
    Given browser is up
    When I visit google site
    Then Title should be Google


Scenario Outline: Test google search results 
    Given browser is up
    When I visit google site
    And I search with "<data>"
    Then I should see result with "<data>"

  Examples:
    | data          |   
#valid test cases
    | Friday        |  
    | 123           |  
    | any Text      |  
#test case sensitiviy
    | sony         |
    | Sony         |
    | SONY         |
# exact match
    | Toyota Corolla        |
    | Samsung Galaxy s24 |

# specific filters price range, location, 
    | under $1000   |

# Misc
    |@#$%         |
    |“@#$%”        |
    |automation test |
