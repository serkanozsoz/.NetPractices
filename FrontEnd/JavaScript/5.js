//GeoLocation

var initMap = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

var showPosition = (position) => {
    //console.log(position);
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 18,
        mapTypeControl: false,
    });
    const card = document.getElementById("pac-card");
    const input = document.getElementById("pac-input");
    const options = {
        fields: ["formatted_address", "geometry", "name", "place_id"],
        strictBounds: false,
        types: ["establishment"],
    };

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(card);

    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.bindTo("bounds", map);

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");

    infowindow.setContent(infowindowContent);

    const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
    });

    autocomplete.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);

        place = autocomplete.getPlace();
        console.log(place);
        if (!place.geometry || !place.geometry.location) {
            alert("No details available for input: '" + place.name + "'");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }

        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        infowindowContent.children["place-name"].textContent = place.name;
        infowindowContent.children["place-address"].textContent =
            place.formatted_address;
        infowindow.open(map, marker);
    });
}
const addPlace = () => {
    if (place != null) {
        var venue = {
            name: place.name,
            id: place.place_id,
        };

        if (checkPlaces(venue)) {
            place = null;
            return;
        }

        places.push(venue);

        console.log(places);
        const placeList = document.getElementById("place-list");
        const placeItem = document.createElement("li");
        placeList.classList.add("list-group");
        placeList.classList.add("list-group-flush");
        placeItem.classList.add("list-group-item");
        placeItem.innerHTML = `${place.name}`;
        placeList.appendChild(placeItem);
        place = null;
    }
}

const checkPlaces = (venue) => {
    console.log([places, venue]);
    for (let i = 0; i < places.length; i++) {
        const item = places[i];
        if (item.id === venue.id) {
            return true;
        }
    }
    return false;
};

let place = null;
let places = [];
    // function initMap() {
    //     const pos = { lat: 41.04431098475722, lng: 29.006752026993592 };
      
    //     const map = new google.maps.Map(document.getElementById("map"), {
    //       zoom: 17,
    //       center: pos,
    //     });
      
    //     var marker = new google.maps.Marker({
    //       position: pos,
    //       map: map,
    //     });
      
    //     map.addListener("click", (e) => {
    //       console.log("Enlem" + e.latLng.lat());
    //       console.log("Boylam" + e.latLng.lng());
    //       var newPos = {
    //         lat: e.latLng.lat(),
    //         lng: e.latLng.lng(),
    //       };
      
    //       marker.setMap(null);
    //       marker = new google.maps.Marker({
    //         position: newPos,
    //         map: map,
    //       });
    //     });
    //   }
      
    //   window.initMap = initMap;
      

  
