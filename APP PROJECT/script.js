
function getLocation(page) {
  navigator.geolocation.getCurrentPosition(
    location=>console.log(location),
    location=>error.log(location)
  );

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(loc) { // permission granted
            location.href=`${page}?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}`;
          },
          function() { // permission denied
            // location defaults to central Bristol
            location.href=`${page}?lat=51.454514&lon=-2.587910`;              
          }
        )
    }
    else { // unsupported feature
        alert("Geolocation is not supported by this browser.");
        // location defaults to central Bristol
        location.href=`${page}?lat=51.454514&lon=-2.587910`;
    }
}

function outputTable(json) {
                
  console.log(json);  
  var t = document.getElementById("results");
  t.innerHTML = "";
  let features = json.features; 
  for (i=0; i<features.length; i++) {
      var row = document.createElement("tr");
      t.appendChild(row);
      var a = features[i].attributes;
      var venue = document.createElement("td");
      var address = document.createElement("td");
      var organisation = document.createElement("td");
      var adviceType = document.createElement("td");
      venue.innerHTML = a.VENUE;
      address.innerHTML = a.ADDRESS;
      organisation.innerHTML = a.ORGANISATION;
      adviceType.innerHTML = a.ADVICE_TYPE;
      row.appendChild(venue);
      row.appendChild(address);
      row.appendChild(organisation);
      row.appendChild(adviceType);

  }
}