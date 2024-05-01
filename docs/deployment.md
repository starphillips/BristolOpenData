# Deployment

<p>Version 1.0.2 of the system currently facilitates the splash page and the first two use cases. This allows users to locate nearby services as per the first use case and refine service options based on different attributes as per the second use case. Development for the third use case is ongoing. The functionality of this application relies on the Bristol Open Data API and MapBox API. Should either of these services become unavailable, the application may not function as expected. The Deployment Diagram provided below outlines the interaction between this web application and the Bristol Open Data.</p>

![Insert Deployment diagram here](images/DepDiagram.png)

# User guide
### Use Case 1: Finding Advice Centers by Type
1. The user opens the application and lands on the home page.
2. They click on the 'Find by Type' tab to display the list of centres categorized by type.
3. The list of advice centres appears on the screen.
4. The user scrolls through the list to identify the name of the advice centre they are interested in.
5. Upon finding the centre's name, the user clicks on it to view more details.
6. They review the information displayed about the advice centre.

### Use Case 2
![Insert screenshots here](images/IndexPage.png)
1.	The app will open on the index page.
2.	The centre employee shall click on ‘Find By Type’ on the navigation bar to access the table.

![Insert screenshots here](images/Table4.png)
3.	They will be directed to this page where they are now able to select what advice type their centre offers.

![Insert screenshots here](images/Table.png)
4.	For example, for debt they will select the ‘Debt’ button on the secondary navigation bar. 
5.	From here they can identify the venue, address, organisation and advice type of the centre and ensure that the information is correct. 

#### Variation 1 [Checking information on the map is correct] :
![Insert screenshots here](images/TablePopUp.png)
6.	 If wanting to ensure the map details are correct they will click on ‘Find By Map’, where a pop-up asking to use their location will appear

![Insert screenshots here](images/Map.png)
7.	If the user selects ‘allow’, the map will centre on their location. If they choose not to share their location, the map will default to the centre of Bristol. 

![Insert screenshots here](images/MapPin.png)
8.	From here the user can zoom in and out or drag on the map until they find their advice centre.
9.	The employee can now click on the drop pin, where information regarding the centre’s venue name and advice type will appear. Here they can check if the correct information is displayed. 

#### Variation 2 [Checking search bar]:
![Insert screenshots here](images/MapSearch.png)
10.	Employees can also search for their centre using the search bar. Here they can type in the selected advice type.

![Insert screenshots here](images/Table3.png)
11.	They will then be directed to the table page where they are able to select the desired advice type offered by their centre and identify whether the information displayed is correct on the table. 

### Use Case 3: Verifying Advice Center Information
1. The user, who is an employee of an advice centre, opens the application and lands on the home page.
2. They click on the 'Find by Type' tab to display the list of centres.
3. They scroll through the list and identify their advice centre's name.
4. Upon finding their centre's name, they click on it to view more details.
5. The user checks all the information displayed about their advice centre.
6. If they notice any inaccuracies or outdated information, they note it down.
7. They decide to get in touch with the application maintainer to report the discrepancies.
8. The user contacts the app maintainer through the provided contact information to request updates or corrections.
