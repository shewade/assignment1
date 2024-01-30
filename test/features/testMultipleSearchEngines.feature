Feature: Test validity of search results on multiple search engines
    Test  search results for validity
@all
Scenario Outline: Test  search results 
    Given browser is up
    When I visit "<website>" site
    And I search with "<data>"
    Then I should see result with "<data>"

  Examples:
    | data          |website|
#valid test cases
    | Friday        |google|
    | Friday        |bing|
    | Friday        |yahoo|
#numbers
    | 123           |google|
    | 123           |bing|
    | 123           |yahoo|
#space seperated word
    | any Text      |google|
    | any Text      |bing|
    | any Text       |yahoo|

    | iPhone X           |google|
    | iPhone X           |bing|
    | iPhone X           |yahoo|
#test case sensitiviy
    | sony      |google|
    | sony     |bing|
    | sony       |yahoo|

    | Sony      |google|
    | Sony     |bing|
    | Sony       |yahoo|

    | SONY      |google|
    | SONY     |bing|
    | SONY       |yahoo|

# exact match
    | Toyota Corolla       |google|
    | Toyota Corolla       |bing|
    | Toyota Corolla       |yahoo|


#    | Samsung Galaxy s24       |google|
#    | Samsung Galaxy s24       |bing|
#    | Samsung Galaxy s24       |yahoo|


# specific filters  range, location etc, 
    | under $1000      |google|
    | under $1000      |bing|
    |under $1000       |yahoo|


# Misc/ invalid test cases
    | @#$%      |google|
    | @#$%      |bing|
    | @#$%       |yahoo|

    | '@#$%'      |google|
    | '@#$%'      |bing|
    | '@#$%'       |yahoo|

# additional tests, test sentenses
    | automation test      |google|
    | automation test      |bing|
    | automation test       |yahoo|


