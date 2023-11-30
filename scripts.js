// Script para inicializar el mapa de Google Maps

function initMap() {
    var coordinates = { lat: 40.7128, lng: -74.006 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 12
    });
}
