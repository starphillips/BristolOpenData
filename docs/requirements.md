# Requirements

## User Needs

### User stories
As an individual struggling with debt, I want a single place so that I can seek support for my debt without stigma. 

As an individual experiencing housing problems, I want to easily be able to locate a centre nearby so that I can discuss different solutions to this. 

As a person seeking legal advice, I would like a place on where I can locate a place of advice, so that I can make an informed decision moving forwards. 

As a person living in Bristol during the cost of living crisis, I would like a place where I can seek advice for new ways to maximise my income, so that the impact the crisis has on my household is reduced.

### Actors
TODO: List and describe the actors/users for this product.

- Advice Centre Employees 
- Person in Bristol seeking advice
- Maintainers of the App

### Use Cases

| USE-CASE 1 | Checking the correct and updated information is available on the app and informing of any changes| 
| -------------------------------------- | ------------------- |
| **Description** |  As an employee of an advice centre, I want to ensure that the correct information about the centre is displayed on the app, so that the local community understands the services available them. |
| **Actors** | Advice centre employee |
| **Assumptions** | <ul> <li> The app has a table displaying each advice centre's name, address, opening times and types of advice. </li> <li>There is a search bar for users to search centre names</li> <li> There are filters available for the user to narrow down the table based on information about the centres e.g. what centres specialise in financial advice </li> </ul> </td></tr>
| **Steps** | <ol> <li> App will open on map, in which the user must click on the table tab to display the centres within a list </li> <li> Scroll and identify the advice centre's name </li> <li> Check that all information about the advice centre is correct based on the information they know as an employee of the centre </li> <li> Get in contact with app maintainer if information is not updated or incorrect </li> </ol> |
| **Variations** | <ul> <li> If the user is able to locate the centre based on a full list, the search bar is available for the user to search for advice centre by name </li> <li> The user is able to user filters to narrow down the list based on certain features of a centre </li> </ul>|
| **Non-functional** | The app should work on Android devices |
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |

| USE-CASE 2 | Identify Free Local Finacial Advice & Support | 
| -------------------------------------- | ------------------- |
| **Description** | As an individual struggling with debt, I want a single place so that I can seek support for my debt without stigma. 
| **Actors** | Person in Bristol seeking advice
| **Assumptions** | The user enables the collection of cookies and shares geo-location. 
| **Steps** | <ol><li> Search Keyword - e.g., Debt</li><li> Give Permission to use my location</li> <li> Centre map on user</li> <li> Add markers for locations in proximity to user in relation to the advice type they've selected</li> <li> Generate route to selected location using local software</li> </ol>
| **Variations** | User may not specify advice type and so all centres within proximity should be displayed. |
| **Non-functional** | <ul> <li>The app should work on Android devices</li> <li>The app should display the advice centres that specialises in the user's chosen advice type.</li> <li>The system should allow the user to select their method of travel e.g. by car, walking</li> <li>The system should generate an optimal route that the user can follow to reach the advice centre based on the user's selected method of travel</li> </ul>|
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |

| USE-CASE 3 | Keeping information up-to-date and updating if there are any changes | 
| -------------------------------------- | ------------------- |
| **Description** | As the app operator, I want to ensure that if any changes are made to the advice centre information, I will update the app accordingly to ensure that users will have the correct up-to-date information. 
| **Actors** | App Operator
| **Assumptions** | An advice centre employee will inform the app operator if there are any changes to be made.
| **Steps** | <ol><li> App operator is informed of any updates e.g. change of opening times</li> <li>Updates to information is made accordingly</li>
| **Variations** | The app operator may want to make their own changes to the app based on their knowledge or update features. |
| **Non-functional** | <ul> <li>The app should work on Android devices</li> </ul>|
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |

## Use Case Diagram
![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification
### Functional requirements
Functional Requirements:

FR1.1 The system should get permission to access the user’s location.

FR1.2 The system should query the database for advice drop-in centres from Open Data Bristol

FR1.3 The system should centre the map on the user’s location using the map object.

FR1.4 The system should add markers for each advice centre on the map

FR1.5 The system should allow users to click on which centre they would like to seek directions to


### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

NFR1.1: The app should work on Android devices 

NFR1.2: The app should display the advice centres that specialises in the user's chosen advice type.

NFR1.3: The app must assume a sensible default location when geolocation is not available for a user (e.g. centre of Bristol) 

NFR1.4: The system should allow the user to select their method of travel e.g. by car, walking

NFR1.5: The system should generate an optimal route that the user can follow to reach the advice centre based on the user's selected method of travel

Indicate which UC the requirement comes from.
