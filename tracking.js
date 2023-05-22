const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const map = document.querySelector("#map")
const coordinates = []
const latitudeCurrent = 31.230416
const LongitudeCurrent = 121.473701
start.addEventListener("click", () => {
  navigator.geolocation.watchPosition(
    (data) => {
      const { latitude, longitude } = data.coords
      console.log(`latitude: ${latitude} Longitude: ${longitude}`)
      map.innerHTML =
        '<iframe width="700" height="300" src="https://maps.google.com/maps?q=' +
        latitude +
        "," +
        longitude +
        '&amp;z=15&amp;output=embed"></iframe>'
      if (latitudeCurrent == latitude && LongitudeCurrent == longitude)
        console.log("you arrive Blaise")
      else console.log("other Place")
      coordinates.push(latitude, longitude)
      window.localStorage.setItem("coordinates", JSON.stringify(coordinates))
    },
    (error) => console.log(error),
    {
      enableHighAccuracy: true,
    }
  )
})
