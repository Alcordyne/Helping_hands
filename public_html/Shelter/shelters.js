// Code gotten from Google API 
// https://developers.google.com/maps/documentation/javascript/examples/place-details#maps_place_details-javascript
// https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination



function initMap() {
  const moreButton = document.getElementById("more");
  const searchShelters = document.getElementById("searchS");
  let zipCode = document.getElementById('userZipInput');
  let getNextPage;
  const sac = { lat: 38.575764, lng: -121.478851 };

  // set inital map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: sac,
    zoom: 12,
  });

  /*// More results button
  moreButton.onclick = function () {
    moreButton.disabled = true;
    if (getNextPage) {
      getNextPage();
    }
  };*/

  searchShelters.onclick = function () {
    zipCode = userZipInput.value;
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

        map.setCenter(userLocation);
        map.setZoom(14);

        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(
          { location: userLocation, radius: 1000, keyword: "homeless_shelter", fields: ["name", "formatted_address", "website", "geometry"] },
          (results, status, pagination) => {
            if (status !== "OK" || !results) return;

            // Add list and markers
            addPlaces(results, map);

            // Access moreButton globally
            /*moreButton.disabled = !pagination || !pagination.hasNextPage;
            if (pagination && pagination.hasNextPage) {
              getNextPage = () => {
                // Note: nextPage will call the same handler function as the initial call
                pagination.nextPage();
              };
            }*/
          }
        );
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });

  }
}

function getPlaceDetails(place, map, infowindow, marker) {
  const service = new google.maps.places.PlacesService(map);
  const placesList = document.getElementById("places");

  service.getDetails(
    { placeId: place.place_id },
    (detailedPlace, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        detailedPlace &&
        detailedPlace.geometry &&
        detailedPlace.geometry.location
      ) {

        // Marker on the map
        const content = document.createElement("div");

        // Display the name of business
        const nameElement = document.createElement("p");
        nameElement.textContent = detailedPlace.name;
        content.appendChild(nameElement);

        // Displayed on the map 
        infowindow.setContent(content);
        infowindow.open(map, marker);
      }
    }
  );
}

function getListDetails(place, map, infowindow, marker) {
  const service = new google.maps.places.PlacesService(map);
  //const placesList = document.getElementById("places");
  const placesList = document.getElementById("places-list");

  service.getDetails(
    { placeId: place.place_id },
    (detailedPlace, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        detailedPlace &&
        detailedPlace.geometry &&
        detailedPlace.geometry.location
      ) {

        // Results List
        const li = document.createElement("li");

        // Name Of Business
        const nameElement = document.createElement("h3");
        nameElement.textContent = place.name;
        li.appendChild(nameElement);

        // Address
        const placeAddressElement = document.createElement("p");
        placeAddressElement.textContent = detailedPlace.formatted_address;
        li.appendChild(placeAddressElement);

        // Website URL
        if (detailedPlace.website) {
          const placeURLElement = document.createElement("a");
          placeURLElement.textContent = "More Info";
          placeURLElement.href = detailedPlace.website;
          placeURLElement.target = "_blank";
          li.appendChild(placeURLElement);
        }

        placesList.appendChild(li);

        // When clicking on the name of business from the list
        li.addEventListener("click", () => {
          getPlaceDetails(place, map, infowindow, marker);
        });

      }
    }
  );
}

function addPlaces(places, map) {
  const infowindow = new google.maps.InfoWindow();

  for (const place of places) {
    if (place.geometry && place.geometry.location) {
      const marker = new google.maps.Marker({
        map,
        title: place.name + ": " + place.formatted_address,
        position: place.geometry.location
      });


      getListDetails(place, map, infowindow, marker);
      
      // Marker tabs
      google.maps.event.addListener(marker, "click", () => {
        const content = document.createElement("div");

        const nameElement = document.createElement("p");
        nameElement.textContent = place.name;
        content.appendChild(nameElement);

        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
    }
  }
}

window.initMap = initMap;
