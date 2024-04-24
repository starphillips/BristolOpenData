# Testing

## Test Plan
TODO: Describe any manual and automated (unit) tests. Uniquely identify each test case. Include prerequisites and test data.
<H3> Manual Test Cases:</H3>
<p> 
<h4> Test Case ID: MT-001 </h4>
Test Case Name: Search for Advice Centers by Keyword <br>
Description: Verify that users can search for advice centres by typing in a keyword.<br>
Prerequisites: Access to the advice drop-in centre system.<br>

  <h4>Test Steps:</h4>

<ol> 
<li> Open the search bar on the homepage.</li>
<li> Type in a keyword (e.g., "debt advice").</li>
<li> Press the search button.</li>
<li> Verify that the search results display advice centres related to the keyword.</li>
</ol>

<h4> Test Case ID: MT-002</h4>
Test Case Name: View Details of an Advice Center<br>
Description: Verify that users can view details of an individual advice centre.<br>
Prerequisites: Access to the advice drop-in centre system.<br> 

<h4>Test Steps:</h4>
<ol>
<li>Click on a specific advice centre from the list.</li>
<li>Verify that the details of the selected advice centre (venue, address, organization, advice type) are displayed.</li>
</ol>

<h4> Test Case ID: MT-003 </h4>
Test Case Name: Load Large Dataset <br>
Description: Verify that the application can efficiently load a large dataset.<br>
Prerequisites: Access to the application and a large dataset available for testing.<br>

<h4>Test Steps:</h4>
<ol>
<li> Prepare a large dataset containing a significant amount of information.</li>
<li> Upload the large dataset to the application.</li>
<li> Observe the application's behaviour during the data loading process.</li>
<li> Verify that the application can handle the large dataset without significant delays or performance issues.</li>
</ol>









</p>

<H3> Automated (Unit) Test Cases:</H3>
<p>
<h4> Test Case ID: UT-001 </h4>
Test Case Name: Query Advice Centers by Keyword <br> 
Description: Test the functionality to query advice centres by keyword.<br> 
Prerequisites: Codebase with implemented search functionality.<br> 
Test Data: Keyword "debt advice".
  
<h4> Test Steps: </h4>
<ol>
<li> Call the query function with the keyword "debt advice". </li>
<li> Verify that the returned JSON contains advice centres related to debt advice.</li>
</ol>

<h4>Test Case ID: UT-002</h4>
Test Case Name: Retrieve Details of an Advice Center<br> 
Description: Test the functionality to retrieve details of an individual advice centre.<br> 
Prerequisites: Codebase with implemented function to retrieve advice centre details.<br> 
Test Data: JSON object representing an advice centre.<br> 

<h4>Test Steps:</h4>
<ol>
<li> Pass a sample JSON object representing an advice centre to the outputTable function. </li>
<li> Verify that the table row generated contains the correct venue, address, organization, and advice type.</li>
</ol>








  
</p>









<h3> Test Runs </h3>
<table>
  <tr>
    <th>Requirement ID</th>
    <th>Requirement Description</th>
    <th>Pass/Fail </th>
    <th>Test Case ID</th>
  </tr>
  <tr>
    <td>REQ-001</td>
    <td>Users can search for advice centres by typing in a keyword.</td>
    <td>Pass</td>
    <td>TC-001FR4</td>
  </tr>
  <tr>
    <td>REQ-002</td>
    <td>Users can view a list of advice centres.</td>
    <td>Pass</td>
    <td>TC-002FR5</td>
  </tr>
    <tr>
    <td>REQ-003</td>
    <td>Users can filter advice centres by advice type.</td>
    <td>Pass</td>
    <td>TC-003FR5.1</td>
  </tr>
      <tr>
    <td>REQ-004</td>
    <td>Users can search for advice centres by location.</td>
    <td>Pass</td>
    <td>TC-004FR4.1</td>
  </tr>
   <tr>
    <td>REQ-005</td>
    <td>The application should load data efficiently.</td>
    <td>Pass</td>
    <td>TC-005FR3.1</td>
  </tr>
     <tr>
    <td>REQ-006</td>
    <td>Users should be able to access detailed information about each advice drop-in session, including the type of advice offered, session timings, and contact details.</td>
    <td>Pass</td>
    <td>TC-006FR3.3</td>
  </tr>
      <td>REQ-007</td>
    <td>The system should ensure data security and privacy.</td>
    <td>Pass</td>
    <td>TC-007FR1.1</td>
  </tr>
</table>
