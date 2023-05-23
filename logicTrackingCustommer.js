//1. creating a table of obcustomerArriveect {}[]
// 1.1 we are creating  distance from gps for finding distance
let customerSchema = [
  {
    name: "Blaise",
    placeNumber: 2,
    depart: "Musaga",
    destination: "customerArriveenda",
    distance: 45,
  },
  {
    name: "Arakaza",
    placeNumber: 20,
    depart: "Musaga",
    destination: "rutana",
    distance: 140,
  },
  {
    name: "Patrick",
    placeNumber: 10,
    depart: "Musaga",
    destination: "Rutovu",
    distance: 110,
  },
  {
    name: "Erica",
    placeNumber: 1,
    depart: "Musaga",
    destination: "Mahwa",
    distance: 100,
  },
  {
    name: "Arsène",
    placeNumber: 5,
    depart: "Musaga",
    destination: "Matana",
    distance: 90,
  },
  {
    name: "Arsène",
    placeNumber: 8,
    depart: "Musaga",
    destination: "Matana",
    distance: 90,
  },
  {
    name: "Kevine",
    placeNumber: 18,
    depart: "Musaga",
    destination: "Rutovu",
    distance: 110,
  },
  {
    name: "Rodrigue",
    placeNumber: 11,
    depart: "Musaga",
    destination: "Nyakararo",
    distance: 80,
  },
  {
    name: "Charmant",
    placeNumber: 3,
    depart: "Musaga",
    destination: "Rutana",
    distance: 140,
  },
]
// 2.sort by distance of arrive

let sortDistanceByFirstArrive = customerSchema.sort((a, b) => {
  return a.distance - b.distance
})
// 3.debug if has done good sort by distance
console.table(sortDistanceByFirstArrive)
// 4.display all customer and prononce them if they arrive
for (
  let currentDist = 0;
  currentDist <=
  sortDistanceByFirstArrive[sortDistanceByFirstArrive.length - 1]["distance"];
  currentDist++
) {
  let customerWithTheSameDestination = sortDistanceByFirstArrive.filter(
    (distanceCurrent) => distanceCurrent.distance == currentDist
  )
  if (customerWithTheSameDestination.length != 0) {
    console.log(
      `I have ${customerWithTheSameDestination.length} customer${
        customerWithTheSameDestination.length > 1 ? "s" : ""
      } who arrive at`,
      currentDist + "km"
    )

    for (let customerArrive = 0; customerArrive < customerWithTheSameDestination.length; customerArrive++) {
      console.log(
        `${customerArrive + 1})` +
          " " +
          customerWithTheSameDestination[customerArrive]["name"] +
          " " +
          `arrive at`,
        customerWithTheSameDestination[customerArrive]["destination"]
      )
    }
    console.log("=======================================")
  }
}
