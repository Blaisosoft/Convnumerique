function DISTANCE_BETWEEN(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371 //km
  const dLat = degreesToRadians(lat2 - lat1)
  const dLon = degreesToRadians(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = earthRadius * c
  return distance
}
function degreesToRadians(deg) {
  return (deg * Math.PI) / 180
}
DISTANCE_BETWEEN(55.5802572, 36.7262327, 51.056923, 5.1778048)

// function ConsoleLog(text) {
//   console.log('the text',text)
// }
// ConsoleLog('Blaise')
