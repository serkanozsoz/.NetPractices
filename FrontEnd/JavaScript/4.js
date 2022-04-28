console.log("4.js");

var initMap = () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("Geolocation is not supported by this browser.");
    }
}

var showPosition = (position) => {
    // console.log(position);
    var pos ={lat:position.coords.latitude,
              lng: position.coords.longitude
    };
    // console.log(pos);
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv,{
        center:pos,
        zoom:18,
        mapTypeId: "terrain",
    });

    var marker = new google.maps.Marker({
        position:pos,
        map:map
    });

    map.addListener('click', (e) =>{
        // console.log(e);
        var posClick = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        };
        //markerları temizle
        marker.setMap(null);
        //tıklanan konuma göre marker ekle
        marker = new google.maps.Marker({
            position:posClick,
            map:map,
            title: 'Clicked location',
            animation: google.maps.Animation.DROP
        });
    });

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
      

  
}