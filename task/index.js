// const arr = [1, 1, 1, 2, 3, 3, 3, 3];

// function arrMix(arr) {
//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)

//     let resalut = []
//     let leftIndex = 0
//     let rightIndex = 0

//     while(leftIndex < left.length || rightIndex < right.length) {
//         if(leftIndex < left.length) {
//             resalut.push(left[leftIndex])
//             leftIndex++
//         } 

//         if(rightIndex < right.length) {
//             resalut.push(right[rightIndex])
//             rightIndex++
//         }
//     }
//     return resalut
// }

// console.log(arrMix(arr))


// option 2, it's correct option

// function arrMix(arr) {
//     let left = arr.slice(0, 3);
//     let right = arr.slice(4);

//     if (left[2] === left[1] && left[2] === left[0]) {
//         let insertIndex = Math.floor(right.length / 2);
//         right.splice(insertIndex, 0, left.pop());
//     }

//     return left.concat(right);
// }

// const arr = [1,22,33,4]

// function sort(arr) {
//     for(let i = 0; i < arr.length - 1; i++) { 
//         let minIndex = i 
//         console.log(minIndex)
        
        
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         if(minIndex !== i) {
//             let tmp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex]= tmp
//         }
//     }
//     return arr
// }

// console.log(sort(arr))

// arr.sort((a, b) => a - b)

// const arr = 3275

// function strNum(arr) {
//     let num = arr.toString()
//     let resalut = ''
//     let i = 0

//     while(i < num.length) {
//         let zero = '0'.repeat(num.length - i - 1)
//         resalut += num[i] + zero

//         if(i < num.length - 1) {
//             resalut += ' + '
//         }
//         i++
//     }
//     return resalut
// }

// console.log(strNum(arr))

// const arr = [1, 2, 3, 4, 5, 2, 4, 1, 3];

// function find(arr) {
//     let resalut = {}

//     for(let i = 0; i < arr.length; i++) {
//         let count = arr[i]

//         if(resalut[count] === undefined) {
//             resalut[count] = 1
//         } else {
//             resalut[count]++
//         }
//     }

//     for(let i = 0; i < arr.length; i++) {
//         let count = arr[i]

//         if(resalut[count] === 1) {
//             return count
//         }
//     }
// }

// console.log(find(arr))
