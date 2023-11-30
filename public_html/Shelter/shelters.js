/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let map;
let service;
let infowindow;

function initMap() {
  const sacra = new google.maps.LatLng(38.582, -121.494);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: sacra,
    zoom: 15,
  });

  const request = {
    query: "homeless shelters",
    fields: ["name", "formatted_address", "geometry"],
  };

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    const content = document.createElement("div");
    const nameElement = document.createElement("h2");

    nameElement.textContent = place.name;
    content.appendChild(nameElement);

    const placeIdElement = document.createElement("p");

    placeIdElement.textContent = place.place_id;
    //content.appendChild(placeIdElement);

    const placeAddressElement = document.createElement("p");

    placeAddressElement.textContent = place.formatted_address;
    content.appendChild(placeAddressElement);
    infowindow.setContent(content);
    infowindow.open(map, marker);
  });
}

// New function to create markers for an array of places
function createMarkersForArray(places) {
  for (let i = 0; i < places.length; i++) {
    createMarker(places[i]);
  }
}

window.initMap = initMap;
