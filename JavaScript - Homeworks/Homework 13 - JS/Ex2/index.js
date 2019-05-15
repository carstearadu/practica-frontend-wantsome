/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654},
    { from: 'Sydney', to: 'chittagong', distance: 8858},
    { from: 'Kolkata', to: 'Sylhet', distance: 670}
  ]

  function convertToMiles(arr) {
      const dist = arr.map((item) => {
          return item.distance*0.621371
      })
      return dist
  }

console.log(convertToMiles(distances))

  function lessThan10k(arr) {
    const dist = arr.filter((item) => {
        if(item.distance < 10000)
        return item
    })
    return dist
}

console.log(lessThan10k(distances))

const sumDistance = distances.reduce((accumulator, item) =>
    accumulator + item.distance, 0)
    
console.log(sumDistance)
