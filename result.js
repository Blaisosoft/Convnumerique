const details = document.querySelector("#details")
var reqcount = 0

navigator.geolocation.watchPosition(successCallback, errorCallback, options)

function successCallback(position) {
  const { accuracy, latitude, longitude, altitude, heading, speed } =
    position.coords
  // initial value for testing ,
  const LatitudeTest = -3.3153281
  const latDiff =((latitude*-1) -3.3153281)
  const LongitudeTest = 29.3947347
  const longDiff = (longitude-(29.3947347))
  //   console.log(position)
  // Show a map centered at latitude / longitude.
  reqcount++
  // if you want to precise after float number you do like this e.g: longititude.toFixed(1)
  details.innerHTML = "Accuracy: " + accuracy + "<br>"
  details.innerHTML +=
    "Latitude: " + latitude + " | Longitude: " + longitude + "<br>"
  details.innerHTML += "=======================" + "<br>"
  details.innerHTML +=
    "LatitudeTest: " +
    LatitudeTest +
    " | LongitudeTest: " +
    LongitudeTest +
    "<br>"
  details.innerHTML += "=======================" + "<br>"
  details.innerHTML += "Altitude: " + altitude + "<br>"
  details.innerHTML += "Heading: " + heading + "<br>"
  details.innerHTML += "Speed: " + speed + "<br>"
  details.innerHTML += "reqcount: " + reqcount + "<br>"
  details.innerHTML += "longDiff: " + longDiff.toFixed(4) + "<br>"
  details.innerHTML += "latDiff: " + latDiff.toFixed(4) + "<br>"
  if (longDiff.toFixed(4) < 0.1)
    details.innerHTML +=
      "<span class='trackingresponse'>Arrive à la destination</span>" + "<br>"
  else
    details.innerHTML +=
      "<span class='trackingresponse'>Pas encore arrive à la destination</span>" +
      "<br>"
}
function errorCallback(error) {}
var options = {
  enableHighAccuracy: true, //ça ralentit l'application
  timeout: 5000,
  maximumAge: 0
}
