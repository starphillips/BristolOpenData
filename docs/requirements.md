# Requirements

## User Needs

### User stories
As someone facing financial challenges with debt, I desire a centralized platform where I can seek assistance for my financial struggles without experiencing any judgment or stigma. 

As an individual facing housing challenges, I wish to use the app to easily discover a nearby centre, enabling me to explore diverse solutions and participate in discussions concerning my housing issues.


As an individual in need of legal advice, I desire a platform where I can find a designated advice centre, empowering me to make informed decisions for my future.


As a Bristol resident navigating the challenges of the cost of living crisis, I seek a platform where I can access advice on innovative ways to boost my income. My goal is to mitigate the impact of the crisis on my household.

### Actors
Actors that appear in the following use-case are as follows:

- Employees of Advice Centers can utilize it to provide personalized guidance tailored to individuals, ensuring a more comprehensive and well-rounded service.
- An individual in Bristol actively seeking advice and proactively pursuing information.
- The developers of the application, along with the application maintenance team.

### Use Cases

| USE-CASE 1 | Checking the correct and updated information is available on the app and informing of any changes| 
| -------------------------------------- | ------------------- |
| **Description** |  As an employee of an advice centre, I want to ensure that the correct information about the centre is displayed on the app so that the local community understands the services available to them. |
| **Actors** | Advice centre employee |
| **Assumptions** | <ul> <li> The app has a table displaying each advice centre's name, address, opening times and types of advice. </li> <li>There is a search bar for users to search centre names</li> <li> There are filters available for the user to narrow down the table based on information about the centres e.g. what centres specialise in financial advice </li> </ul> </td></tr>
| **Steps** | <ol> <li> App will open on map, in which the user must click on the table tab to display the centres within a list </li> <li> Scroll and identify the advice centre's name </li> <li> Check that all information about the advice centre is correct based on the information they know as an employee of the centre </li> <li> Get in contact with app maintainer if information is not updated or incorrect </li> </ol> |
| **Variations** | <ul> <li> If the user is able to locate the centre based on a full list, the search bar is available for the user to search for advice centre by name </li> <li> The user is able to user filters to narrow down the list based on certain features of a centre </li> </ul>|
| **Non-functional** | The app should work on Android devices |
| **Issues** | None identified. 

| USE-CASE 2 | Identify Free Local Finacial Advice & Support | 
| -------------------------------------- | ------------------- |
| **Description** | As an individual struggling with debt, I want a single place so that I can seek support for my debt without stigma. 
| **Actors** | Person in Bristol seeking advice
| **Assumptions** | The user enables the collection of cookies and shares geo-location. 
| **Steps** | <ol><li> Search Keyword - e.g., Debt</li><li> Give Permission to use my location</li> <li> Centre map on user</li> <li> Add markers for locations in proximity to user about the advice type they've selected</li> <li> Generate route to the selected location using local software</li> </ol>
| **Variations** | The User may not specify advice type, so all centres within proximity should be displayed. |
| **Non-functional** | <ul> <li>The app should work on Android devices</li> <li>The app should display the advice centres that specialise in the user's chosen advice type.</li> <li>The system should allow the user to select their method of travel, e.g. by car, walking</li> <li>The system should generate an optimal route that the user can follow to reach the advice centre based on the user's selected method of travel</li> <li> The app must assume a sensible default location when geolocation is not available for a user (e.g. centre of Bristol) </li> </ul>|
| **Issues** | Location information will not be displayed if permission to access the location is not granted.

| USE-CASE 3 | Keeping information up-to-date and updating if there are any changes | 
| -------------------------------------- | ------------------- |
| **Description** | As the app operator, I want to ensure that if any changes are made to the advice centre information, I will update the app accordingly to ensure that users will have the correct up-to-date information. 
| **Actors** | App Operator
| **Assumptions** | An advice centre employee will inform the app operator if any changes need to be made.
| **Steps** | <ol><li> App operator is informed of any updates, e.g. change of opening times</li> <li>Updates to information are made accordingly</li>
| **Variations** | The app operator may want to make their own changes to the app based on their knowledge or update features. |
| **Non-functional** | <ul> <li>The app should work on Android devices</li> </ul>|
| **Issues** | None identified. 

### Use Case Diagram
![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification

### Functional requirements
<H5> FR1: User Authentication and Profile Management </H5>
FR1.1 - Users should be able to create accounts with unique usernames and passwords.
<br>FR1.2 - The system should allow users to log in securely to access personalized features.

<H5>FR2: Location Services </H5>
FR2.1 - The app should request and obtain permission to access the user's location.
<br>FR2.2 - Users should have the option to manually input their location.

<H5>FR3: Data Retrieval and Integration </H5>
FR3.1 - The app should integrate with Open Data Bristol's dataset to retrieve information about advice drop-in sessions.
<br>FR3.2 - Information about debt, energy, benefits, welfare, housing, legal matters, and immigration should be accurately represented. 
<br>FR3.3 - Users should be able to access detailed information about each advice drop-in session, including the type of advice offered, session timings, and contact details.

<H5>FR4: Mapping and Navigation </H5>
FR4.1 - The app should display a map centred on the user's location.
<br>FR4.2 - Advice drop-in sessions should be visually marked on the map.
<br>FR4.3 - Users should be able to select a specific advice session on the map and receive directions to it.

<H5>FR5: Filtering and Sorting </H5>
FR5.1 - Users should be able to filter advice sessions based on categories such as debt, energy, benefits, welfare, housing, legal matters, and immigration.
<br>FR5.2 - The system should allow the sorting of advice sessions based on proximity or relevance to the user's needs.

<H5>FR6: User Interaction </H5>
FR6.1 - The system should enable users to interact with advice drop-in session markers on the map to get more information.
<br>FR6.2 - Users should be able to save or bookmark sessions for future reference.

<H5>FR7: Accessibility </H5>
FR7.1 - The app should be designed with accessibility features, ensuring usability for individuals with diverse needs.

<H5>FR8: Notifications </H5>
FR8.1 - Users should receive notifications about upcoming advice drop-in sessions based on their preferences.

<H5>FR9: Offline Functionality</H5>
FR9.1 - The app should store essential information locally for offline access.
<br>F9.2 - Users should be able to access previously viewed information even without an internet connection.



### Non-Functional Requirements
<H5> Performance</H5>
NFR1.1: The app should respond promptly and efficiently, ensuring quick access to information about advice drop-in sessions.
<H5> Scalability</H5>
NFR1.2: The application should be designed to handle potential growth in data and user base without compromising performance.
<H5> Reliability</H5>
NFR1.3: The app must reliably provide accurate information about the locations and details of advice drop-in sessions without errors or inconsistencies.

NFR1.4: The user data, susceptible information related to legal matters and immigration, should be securely stored and transmitted to maintain user confidentiality and strictly adhere to data protection laws and regulations to safeguard users' privacy and their information.

NFR1.5: The user interface should be intuitive and user-friendly, allowing individuals to navigate and find relevant information without confusion.

NFR1.6: The app should be designed to accommodate users with various abilities, ensuring it is accessible to a diverse range of individuals.

NFR1.7: The application should be compatible with different devices and operating systems to maximise user accessibility.

NFR1.8: The app should be available and accessible to users at all times, with minimal downtime for maintenance or updates.

NFR1.9: Implement tools for monitoring the app's performance to identify and address any issues promptly.

NFR1.10: The app should seamlessly integrate with other relevant systems or platforms to enhance its overall functionality and utility.
