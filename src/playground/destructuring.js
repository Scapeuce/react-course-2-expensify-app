// const person = {
//     // name: 'Andres',
//     age: 67,
//     location: {
//         city: 'Auckland',
//         temp: 92 
//     }
// }
// // ES6 Object destructuring
// // name is defaulted to 'Anonymous'
// const { name = 'Anonymous', age } = person
// // temp is renamed to temperature
// const {temp: temperature, city } = person.location
// console.log(`${name} is ${age}.`)
// console.log(`It's ${temperature} in ${city}`)
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
// const {name:publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)

//Array destructurin'g
const address = ['777 Konini Ave,', 'Manukau', ' Auckland', '2025']
console.log(`you are in ${address[1]} ${address[2]}`)

const [street, city, region, zip] = address
console.log(`you are in ${city} ${region}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [product, , mediumPrice] = item
console.log(`A medium ${product} costs ${mediumPrice}`)