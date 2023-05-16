let distance = [3, 3, 3, 3, 2, 2, 2, 6, 6, 9, 11, 11, 13, 12]
let customerSchema = [
  {
    name: "Blaise",
    placeNumber: 2,
    depart: "Musaga",
    destination: "jenda",
    distance: 45,
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
let distanceByArrive = customerSchema.sort((a, b) => {
  return a.distance - b.distance
})

console.log(distanceByArrive)

for (
  let index = 0;
  index <= distanceByArrive[distanceByArrive.length - 1]["distance"];
  index++
) {
  let result = distanceByArrive.filter(
    (distanceCurrent) => distanceCurrent.distance == index
  )
  if (result.length != 0) {
    console.log(
      `J'ai ${result.length} client${
        result.length > 1 ? "s" : ""
      } qui arrive a`,
      index + "km"
    )

    for (let j = 0; j < result.length; j++) {
      console.log(
        `${j + 1})` + " " + result[j]["name"] + " " + ` arrive à`,
        result[j]["destination"]
      )
    }
    console.log("=======================================")
  }
}
