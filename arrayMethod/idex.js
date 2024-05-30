// // 1. 
// const arr = [84, 10, 38, 79, 78, 40, 62, 19, 6, 89, 62, 76, 93, 20, 42, 84, 81, 20, 4, 13]

// // const number = arr.sort((a, b) => a - b)
// // console.log(arr)
// // const reversNumber = arr.sort(() => -1)

// const filerArr = arr.filter((arr) => {
//     if(arr % 3 === 0) {
//         return arr
//     }
// })

// const numMoreTen = arr.filter(arr => arr > 10)
// console.log(numMoreTen)

// // arr.forEach(item => {
// //     document.write(item)
// // })

// let mapMethod = arr.map(item => item *= 3)

// console.log(mapMethod)


// let reduce = arr.reduce((acc, value) => {
//     return acc + value
// })

// console.log(reduce)

// // 2

// const strArr = ['banana', 'apple', 'kiwi', 'elderberry', 'date', 'fig', 'grape', 'cherry', 'lemon', 'honeydew', 'a']

// const str = strArr.sort((a, b) => {
//     if(a > b) {
//         return 1
//     }
//     return -1
// })

// // const str2 = strArr.sort((a, b) => {
// //     if(a > b) {
// //         return -1
// //     }
// //     return 1
// // })

// const wordsArray = ['cat', 'dog', 'sun', 'ant', 'sky', 'elephant', 'dinosaur', 'universe', 'planet', 'horizon'];
// let zero = []

// const srtWords = wordsArray.filter((item) => {
//     if(item.length > 4) {
//         zero.push(item)
//     }
// })

// const moveWrods = wordsArray.map((item) => {
//     return `Sam says ${item}`
// })

// // 3

// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ]

// const usersSort = users.sort((a, b) => {
//     return a.age - b.age
// })

// const usersSortMax = users.sort((a, b) => {
//     return a.age + b.age
// })

// const sortUsersName = users.sort((a,b) => a.name.length - b.name.length)
// const sortUsersName2 = users.sort((a,b) => b.name.length - a.name.length)

// const idUsers = users.reduce((acc, user) => {
//     const id = Math.random() * 10

//     if(user.isMarried) {
//         acc.push({
//             ...user,
//             hasApartment: true
//         })
//     }

//     const findId = {
//         user,
//         id,
//     }

//     acc.push(findId)

//     return acc
// }, [])

// // console.log(users)
// // console.log(idUsers)

// const idUsersSort = idUsers.sort((a, b) => a.id - b.id)

// // WORK IN THE CLASSROOM

// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//  ];
 
// // const filterCars = cars.filter((car) => car.volume > 3)
// // const filterCars = cars.filter((car) => car.volume = 2)
// // const filterCars = cars.filter((car) => car.volume > 2 && car.producer === 'mercedes');
// // const filterCars = cars.filter((car) => car.volume >= 3 && car.producer === "subaru");
// // const filterCars = cars.filter((car) => car.power > 300);
// // const filterCars = cars.filter((car) => car.power > 300 && car.producer === "subaru");
// // const filterCars = cars.filter((car) => car.engine = 'ej');
// // const filterCars = cars.filter((car) => car.power > 300 && car.producer === 'subaru' || car.engine == 'ej')
// // const filterCar = cars.filter((car) => car.volume >= 3 && car.producer === 'mercedes')
// // const filterCar = cars.filter((car) => car.volume > 2 && car.power > 250)
// // const filterCar = cars.filter((car) => car.power > 250 && car.producer === 'bmw')

// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
//  ];

// // const sortUsrtId = usersWithAddress.sort((a, b) => a.id + b.id)
// // const sortUsrtId = usersWithAddress.sort((a, b) => b.id - a.id)
// // const sortUsrtId = usersWithAddress.sort((a, b) => a.age  - b.age)
// // const sortUsrtId = usersWithAddress.sort((a, b) => b.age - a.age)
// // const sortUsersWithAddress = usersWithAddress.sort((a, b) => a.name.length - b.name.length)
// // const sortUsersWithAddress = usersWithAddress.sort((a, b) => b.name.length - a.name.length)
// // const sortUsersWithAddress = usersWithAddress.sort((a, b) => a.address.number - b.address.number)
// // const sortUsersWithAddress = usersWithAddress.filter(user => user.address.number % 2 === 0);

// // const sortUsersWithAddress = usersWithAddress.sort((a, b) => {
// //     const userStreetA = a.address.street.toLocaleLowerCase()
// //     const userStreetB = b.address.street.toLocaleLowerCase()
// //     if(userStreetA > userStreetB) {
// //         return -1
// //     }

// //     return 1
// // })

// // const sortUsersWithAddress = usersWithAddress.reduce((acc, value) => {
// //     return acc + value.age
// // }, 0)

// // const sortUsersWithAddress = usersWithAddress.reduce((acc, user) => {
// //     const child = {
// //        child: true,
// //        user
// //     }

// //     if(user.age >= 30 && user.isMarried) {
// //         acc.push(child)
// //     }

// //     return acc
// // }, [])


// // Additionally

// // Створити обєкт автомобіля з полями:
// // Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// // Власник автомобіля теж має бути обєкт, у якого є поля
// // Імя, вік, стаж водіння.

// const newCars = [
//     {
//       brand: 'Toyota',
//       enginePower: 150,
//       owner: { name: 'John', age: 35, drivingExperience: 10 },
//       price: 20000,
//       year: 2018
//     },
//     {
//       brand: 'Honda',
//       enginePower: 140,
//       owner: { name: 'Alice', age: 28, drivingExperience: 1 },
//       price: 18000,
//       year: 2017
//     },
//     {
//       brand: 'Ford',
//       enginePower: 170,
//       owner: { name: 'Michael', age: 40, drivingExperience: 15 },
//       price: 22000,
//       year: 2019
//     },
//     {
//       brand: 'Chevrolet',
//       enginePower: 160,
//       owner: { name: 'Emily', age: 33, drivingExperience: 8 },
//       price: 21000,
//       year: 2016
//     },
//     {
//       brand: 'BMW',
//       enginePower: 200,
//       owner: { name: 'David', age: 45, drivingExperience: 20 },
//       price: 30000,
//       year: 2020
//     },
//     {
//       brand: 'Mercedes',
//       enginePower: 180,
//       owner: { name: 'Sophia', age: 30, drivingExperience: 12 },
//       price: 25000,
//       year: 2018
//     },
//     {
//       brand: 'Audi',
//       enginePower: 190,
//       owner: { name: 'Daniel', age: 38, drivingExperience: 17 },
//       price: 28000,
//       year: 2019
//     }
// ];

// const newDriver = [
//     { name: 'Driver1', age: 30, experience: 8 },
//     { name: 'Driver2', age: 35, experience: 12 },
//     { name: 'Driver3', age: 28, experience: 7 },
//     { name: 'Driver4', age: 40, experience: 15 },
//     { name: 'Driver5', age: 32, experience: 10 }
// ]


// function upPower(newCars) {
//     let driver = 0
    
//     for (let i = 0; i < newCars.length / 2; i++) {
//         newCars[i].enginePower *= 1.1;
//         newCars[i].price *= 1.05

//         newCars[i].owner = newDriver[driver]
//         driver++

//         if(driver >= newDriver.length) {
//             driver = 0
//         }
//     }
//     return newCars
// }

// function updateDriver(newCars) {
//     newCars.forEach(car => {
//         const userDriver = car.owner;
//         if (userDriver.experience < 5 && userDriver.age > 25) {
//             userDriver.experience += 1; 
//             console.log(`${userDriver.name} sent to course. New experience: ${userDriver.experience}`);
//         } else {
//             console.log('all ready')
//         }
//     });
// }

// const ageDriver = newCars.reduce((acc, value) => {
//     return acc + value.price
// }, 0)

// console.log(ageDriver)
// console.log(upPower(newCars))  