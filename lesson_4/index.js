// const arr = [22,4,3,22,6]


// function find(arr) {
//     console.log(arr)
// }

// const array = [] 

// function calc() {
//     for(let i = 0; i < 20; i++) {
//         const num = Math.ceil(Math.random() * 10);
//         array.push(num)
//     }
// }

// calc()
// find(array)

// function findMin(a, b, c) {
//     let min = a
//     if(b < min) {
//         min = b
//     }

//     if(c < min) {
//         min = c
//     }
//     console.log(min)
// }


// function findMax(a, b, c) {
//     let max = a;
//     if (b > max) {
//         max = b;
//     }

//     if (c > max) {
//         max = c;
//     }
//     console.log(max);
// }


// findMin(2,1,4)
// findMax(10, 5, 8);

// function findArrMax(arr) {
//     const max = arr[0]
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// function findArrMin(arr) {
//     let min = arr[0]
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return min
// }

// console.log(findArrMin(arr))
// console.log(findArrMax(arr))

// function plus(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum 
// }


// function mindl(arr) {
//     let sum = arr[0]
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum / arr.length
// }
// console.log(mindl(arr))

// function sum(a, b) {
//     let resultArray = []
//     for(let i = 0; i < a.length; i++) {
//         resultArray.push(a[i] + b[i])
//     }
//     return resultArray
// }

// console.log(sum([1,2,3,4], [2,3,4,5]))

// function MinMax(arr) {
//     let max = arr[0]
//     let min = arr[0]
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         } else if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     console.log( max);
//     return min;
// }

// MinMax(arr)

// function foo(arr, i) {
//     const temp = arr[i]
//     arr[i] = arr[i + 1]
//     arr[i + 1] = temp

//     return arr
// }

// console.log(foo([9, 8, 0, 4], 0))

// function zeroArray(arr) {
//     const zero = [];
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             zero.push(arr[i]);
//         } else {
//             count++;
//         }
//     }

//     for (let i = 0; i < count; i++) {
//         zero.push(0);
//     }

//     return zero;
// }

// console.log(zeroArray([1, 0, 6, 0, 3]))


// function normalizeName(name) {
//     name = name.trim();
//     name = name.replace(/\s+/g, ' ');
//     return name;
// }

// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';

// n1 = normalizeName(n1)

// console.log(n1)