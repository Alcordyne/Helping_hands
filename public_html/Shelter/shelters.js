function initMap() {
  // Create the map.
  var map = new
    google.maps.Map(document.getElementById('map'),{
      center: {lat: 38.5816, lng: -121.4944},
      zoom: 12,
  });
  
  // Declare getNextPage outside the function to make it accessible globally
  let getNextPage;
  
  // Declare moreButton outside the function to make it accessible globally
  const moreButton = document.getElementById("more");

  moreButton.onclick = function () {
    moreButton.disabled = true;
    if (getNextPage) {
      getNextPage();
    }
  };
}

function searchShelters() {
  let zipCode = document.getElementById('userZipInput').value;
  const geocoder = new google.maps.Geocoder();
  let valid = false;

  // check for 5-length zip code
    if(zipCode.length == 5){
      valid = true;
    }
    else{
      alert("Invalid Zipcode");
      zipCode = document.getElementById('userZipInput').value;
    }

  // Use the zipCode provided as the address for geocoding
  geocoder.geocode({ 'address': zipCode }, function (results, status) {
    if (status === 'OK' && results[0].geometry) {
      const userLocation = results[0].geometry.location;

      const service = new google.maps.places.PlacesService(map);
      // Perform a nearby search.
      service.nearbySearch(
        {location: userLocation, radius: 800, type: "homeless_shelter"},
        (results, status, pagination) => {
          if (status !== "OK" || !results) return;

          // Pass map as an argument to addPlaces
          addPlaces(results, map);

          // Access moreButton globally
          moreButton.disabled = !pagination || !pagination.hasNextPage;
          if (pagination && pagination.hasNextPage) {
            getNextPage = () => {
              // Note: nextPage will call the same handler function as the initial call
              pagination.nextPage();
            };
          }
        }
      );
    } else {
      console.error('Geocode was not successful for the following reason:', status);
    }
  });
}

function addPlaces(places, map) {
  const placesList = document.getElementById("places");

  for (const place of places) {
    if (place.geometry && place.geometry.location) {
      new google.maps.Marker({
        map,
        title: place.name,
        position: place.geometry.location,
      });

      const li = document.createElement("li");

      li.textContent = place.name;
      placesList.appendChild(li);

      li.addEventListener("click", () => {
        map.setCenter(place.geometry.location);
      });
    }
  }
}

// Make initMap accessible globally
window.initMap = initMap;
