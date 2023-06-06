const details = document.querySelector("#details")
const coordinates = []
var reqcount = 0
const RN9 = [
 {place:'stationInterpetrolKinama',lat:-3.3277472,long:29.3792648},
 {place:'chezCommune',lat:-3.347039, long:29.368214},
 {place:'CampMunicipal',lat:-3.355752, long:29.367232},
 {place:'cotebu',lat:-3.360612,long: 29.367943},
 {place:'eglisePentecote',lat:-3.366548, long:29.365436},
 {place:'permanenceBwiza',lat:-3.373256, long: 29.364125},
 {place:'stationCarama',lat:-3.315244,long: 29.394944,customerNumber: [2,3,9,4]},
]
let iteration = 0
// rutovu -3.874525, 29.851350
// Ruringanizo -3.847151, 29.794156
const RN9SortByLong = RN9.sort((a,b)=>{
  return a.long-b.long
})
// console.log("RN9 sort by long : 29.394944-29.3947022")
// console.log(Math.abs(29.3947022-29.364125).toFixed(3))

navigator.geolocation.watchPosition(successCallback, errorCallback, options)

function successCallback(position) {
  const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords
  const found = RN9.find(element => (Math.abs(element.long-longitude).toFixed(3) < 0.1));
  console.log('ELement found:',found)

  // initial value for testing ,
  const LatitudeTest = -3.323499
  const latDiff =((Math.abs(latitude)) - LatitudeTest)
  const LongitudeTest = 29.364125 
  const longDiff = ((Math.abs(longitude))-(LongitudeTest))
  coordinates.push(latitude, longitude)
  window.localStorage.setItem("coordinates", JSON.stringify(coordinates))
  window.localStorage.setItem("RN9SortByLong", JSON.stringify(RN9SortByLong))
  //   console.log(position),
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
  details.innerHTML += "=======================" + "<br>"
  details.innerHTML += "latDiff: " + latDiff.toFixed(4) + "<br>"
  details.innerHTML += "longDiff: " + longDiff.toFixed(4) + "<br>"
  details.innerHTML += "RN9SortByLong: " + window.localStorage.getItem('RN9SortByLong')+ "<br>"
  details.innerHTML += "=======================" + "<br>"
  details.innerHTML += "<span class='trackingresponse'>Arrive à la destination</span>" + "<br>"
  details.innerHTML += `<span class='trackingresponse'>Pas encore arrive à la destination nous sommes avant </span>` + "<br>"

}
function errorCallback(error) {}
var options = {
  enableHighAccuracy: true, //ça ralentit l'application
  timeout: 5000,
  maximumAge: 0
}
