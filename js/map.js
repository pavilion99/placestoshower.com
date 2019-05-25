let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"),
        {
            center: {lat: 39.833333, lng: -98.583333},
            zoom: 4
        }
    );
}

function loadLocations() {
    const x = new XMLHttpRequest();
    x.open("GET", "locations/all/", true);
    x.onload = (function() {
        const locations = JSON.parse(this.responseText);

        for (const location of locations) {
            makeMarker(location);
        }
    }).bind(x);
    x.send();
}

function makeMarker({latitude, longitude, name}) {
    return new google.maps.Marker({
       position: {lat: latitude, lng: longitude},
       title: name,
       map
    });
}

window.addEventListener("load", loadLocations);