let distance = [3, 3, 3, 3, 2, 2, 2, 6, 6, 9, 12]
let customerSchema = []
let distanceByArrive = distance.sort((a, b) => {
  return a - b
})

console.log(distanceByArrive)
var matrice = new Array()

for (
  let index = 0;
  index <= distanceByArrive[distanceByArrive.length - 1];
  index++
) {
  matrice[index] = index
  let result = distanceByArrive.filter(
    (distanceCurrent) => distanceCurrent == index
  )
  if (result.length != 0) {
    for (let j = 0; j < result.length; j++) {
      console.log(
        `${j + 1}` + " " + `client${j > 1 ? "s" : ""} arrive`,
        result[j] + "km"
      )
    }
    // result = []
    console.log("=======================================")
  }
}
