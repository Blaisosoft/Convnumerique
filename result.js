const details = document.querySelector("#details")
var reqcount = 0

navigator.geolocation.watchPosition(successCallback, errorCallback, options)

function successCallback(position) {
  const { accuracy, latitude, longitude, altitude, heading, speed } =
    position.coords
  // initial value for testing ,
  const LatitudeTest = -3.3151321
  const LongitudeTest = 29.3928222
  const jenda = { LatitudeTest, LongitudeTest }
  // Show a map centered at latitude / longitude.
  reqcount++
  // if you want to precise after float number you do like this e.g: longititude.toFixed(1)
  details.innerHTML = "Accuracy: " + accuracy + "<br>"
  details.innerHTML +=
    "Latitude: " + latitude + " | Longitude: " + longitude + "<br>"
  details.innerHTML += "Altitude: " + altitude + "<br>"
  details.innerHTML += "Heading: " + heading + "<br>"
  details.innerHTML += "Speed: " + speed + "<br>"
  details.innerHTML += "reqcount: " + reqcount + "<br>"
  if (latitude == LatitudeTest && longitude == LongitudeTest)
    details.innerHTML += "Arrive à la destination" + "<br>"
  else details.innerHTML += "Pas encore arrive à la destination" + "<br>"
}
function errorCallback(error) {}
var options = {
  // enableHighAccuracy: false, ça relentit l'application
  // timeout: 5000,
  // maximumAge: 0
}
