let maker, map


function initMap(){
//console.log("Inicializando mapa")
const posicion = {
    lat: -25.363,
    lng: 131.044
}

const map = new google.maps.Map(document.getElementById("map"), 
{
    zoom: 4,
    center: posicion
})

const marker = new google.maps.Marker({
    position: posicion,
    map: map,
    title: "Posicion Inicial"
})
geoPosiciona()

}
function geoPosiciona() {
    if (navigator.geolocation){
    const geoLoc = navigator.geolocation
    const wathPos = geoLoc.watchPosition(centrarMapa => {
}, error => console.error(error), { timeout: 60000})
} else {
    alert("tu navegador no admite geolocalizacion")
}
function centrarMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    market.setPosition(nuevaPos)
    map.setCenter(nuevaPos)

}
}
function onError(error) {
    console.error(error)
}
