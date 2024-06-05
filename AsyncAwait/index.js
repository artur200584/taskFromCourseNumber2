// async function wakeUp(oclock) {
//     return new Promise((resolve, reject) => {

//         if(oclock === 8.08) {
//             return reject('не встав')
//         }

//         setTimeout(() => {
//             resolve('встав')
//         }, 2000);
//     })
// }

// async function breakfast() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('поснідав')
//         }, 5000);
//     })
// }

// async function dress() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('одівся')
//         }, 2000);
//     })
// }

// async function goToBus(bus) {
//     return new Promise((resolve, reject) => {

//         if(bus === 9.00) {
//             reject('ти запізнився на автобус вертайся додому')
//         }

//         setTimeout(() => {
//             resolve('пішов на автобус')
//         }, 4000);
//     })
// }

// async function gotOnTheBus(bus) {
//     return new Promise((resolve, reject) => {

//         if(bus === 'full') {
//             reject('автобус був заповненний')
//         }

//         setTimeout(() => {
//             resolve('сів на автобус')
//         }, 1000);
//     })
// }

// async function gotTheBusStop() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('доїхав до своєї зупинки')
//         }, 5000);
//     })
// }

// async function goToOffice() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('дойшов до офісу')
//         }, 3000);
//     })
// }

// option 1

// async function start() {
//     try{
//     const getUp = await wakeUp()
//     console.log('Artur', getUp)

//     const aet = await breakfast()
//     console.log(aet)

//     const myDress = await dress()
//     console.log(myDress)

//     const mygoToBus = await goToBus()
//     console.log(mygoToBus)

//     const mygotOnTheBus = await gotOnTheBus()
//     console.log(mygotOnTheBus)

//     const mygotTheBusStop = await gotTheBusStop()
//     console.log(mygotTheBusStop)

//     const mygoToOffice = await goToOffice()
//     console.log(mygoToOffice)
//     } catch (e) {
//         console.log(e, 'ти не поїхав на офіс')
//     }
// }

// start()

// option 2

// wakeUp()
//     .then((resalut) => {
//         console.log('Artur', resalut)
//         return breakfast()
//     })
//     .then((resalut) => {
//         console.log(resalut)

//         return dress()
//     })
//     .then((resalut) => {
//         console.log(resalut)

//         return goToBus()
//     })
//     .then((resalut) => {
//         console.log(resalut)

//         return gotOnTheBus()
//     })
//     .then((resalut) => {
//         console.log(resalut)

//         return gotTheBusStop()
//     })
//     .then((resalut) => {
//         console.log(resalut)

//         return goToOffice()
//     })
//     .then((resalut) => {
//         console.log(resalut)
//     })
//     .catch((reson) => {
//         console.log('не поїхав бо', reson)
//     })
//     .finally(() => {
//         console.log('over')
//     })


// ------------------------------
// garbage

// async function Word() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('H')
//         }, 1000);
//     })
// }

// async function word2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('E')
//         }, 2000);
//     })
// }
// async function word3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('L')
//         }, 3000);
//     })
// }

// async function word4() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('L')
//         }, 4000);
//     })
// }

// async function word5() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('O')
//         }, 5000);
//     })
// }

// async function start() {
//     const one = await Word()
//     console.log(one)

//     const two = await word2()
//     console.log(two)

//     const theer = await word3()
//     console.log(theer)

//     const for3 = await word4()
//     console.log(for3)

//     const five = await word5()
//     console.log(five)
// }

// start()