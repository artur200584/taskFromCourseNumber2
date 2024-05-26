// const arr = [10,22,44,66]
// console.log(arr[3])

// const type = [22,10,43, 'artur', true, 'vika']

// const number = type.filter(item => typeof item === 'number')
// const str = type.filter(item => typeof item === 'string')
// const str2 = type.filter(item => typeof item === 'string' && item.length > 4)
// const bool = type.filter(item => typeof item === 'boolean')
// console.log(str)
// console.log(number)
// console.log(str2)
// console.log(bool)

// for(let i = 0; i < 100; i++) {
//     console.log([i])
// }

// for(let i = 0; i < 100; i++) {
//     if(i % 2 === 0) {
//         console.log([i])
//     }
// }

// for(let i = 0; i < 100; i++) {
//     if(i % 3 === 0) {
//         console.log([i])
//     }
// }

// const firstArr = ['js', 'css', 'jq']

// const arr3 = firstArr.shift()
// console.log(arr3)

// const arr4 = firstArr.pop()
// console.log(arr4)

// const orig = [1, 2, 3, 4, 5];

// let lastElement1 = orig.pop();
// let lastElement2 = orig.pop();

// let firstElement = orig.shift();
// orig.unshift(firstElement);

// orig.splice(3, 0, 'a', 'b', 'c');

// orig.push(lastElement2);
// orig.push(lastElement1);

// console.log(orig)

// let originalArray = [1, 2, 3, 4, 5];

// let secondElement = originalArray.splice(1, 1)[0];
// let thirdElement = originalArray.splice(2, 1)[0];
// let fourthElement = originalArray.splice(3, 1)[0];

// originalArray.splice(1, 0, 'a', 'b');
// originalArray.splice(6, 0, 'c');
// originalArray.push('e');
// originalArray.splice(3, 0, secondElement);
// originalArray.splice(4, 0, thirdElement);
// originalArray.splice(5, 0, fourthElement);

// console.log(originalArray);

// const loop = [10,20,3,4,50,60,47,80,9,10]

// for(let i = 0; i < loop.length; i++) {
//     if(loop[i] % 2 === 0) {
//         console.log(loop[i])
//     }
// }

// const lastArr = [12,34,56,78,34,12,77,33,1,10]
// const secondArr = []

// for(let i = 0; i < lastArr.length; i++) {
//     secondArr.push(lastArr[i])
// }

// console.log(secondArr)

// const arr6 = [5, 12, 8, 130, 44, 2, 15, 7, 21, 39]

// const copyArr = new Array(arr6.length)

// for(let i = 0; i < arr6.length; i++) {
//     copyArr[i] = arr6[i]
// }

// console.log(copyArr)


// const even1t = [2,17,13,6,22,31,45,66,100,-18]
// let i = 0

// while(i < even1t.length) {
//     console.log(even1t[i])
//     i++
// }

// for(let i = 0; i < even1t.length; i++) {
//     console.log(even1t[i])
// }

// let j = 0
// while(j < even1t.length) {
//     if(even1t[j] % 2 === 0) {
//         console.log(even1t[i])
//     }
//     i++
// }

// for(let i = 0; i < even1t.length; i++) {
//     if(even1t[i] % 2 === 0) {
//         console.log(even1t[i])
//     }
// }

// const num = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

// for(let i = 0; i < num.length; i++) {
//     if(num[i] % 3 === 0) {
//         console.log('Artru')
//     }
// }

// const revers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

// for(let i = revers.length - 1; i >= 0; i--) {
//     console.log(revers)
// }

// const pust = []
// for (let i = 2; pust.length < 50; i += 2) {
//     pust.push(i);
// }

// for (let i = 3; pust.length < 50; i += 3) {
//     pust.push(i);
// }


// const pust = []

// for(let i = 0; i < 20; i++)  {
//     const num = Math.ceil(Math.random() * (732 - 8)) + 1

//     if(num % 3 === 0) {
//         console.log(num)
//     }
// }

// const arr = [100,250,50, 168, 120, 345, 188]

// function calc(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum / arr.length
// }

// console.log(calc(arr))

// const num = [1,2,3,4,5,6,7,8,9,10]
// const number = []

// for(let i = 0; i < num.length; i++) {
//     num[i] *= 5
//     number.push(num[i])
// }

// console.log(number)

// const newLoop = [1, 'apple', 23, 'banana', true, 45, 'car', 67, undefined, 'dog', 89, null, 'elephant', 101];

// const numbersArray = []

// for(let i = 0; i < newLoop.length; i++) {
//     if(typeof newLoop[i] === 'number') {
//         numbersArray.push(newLoop[i])
//     }
// }

// console.log(numbersArray)


// const str = ['a', 'b', 'c']

// for(let i = 0; i < str.length; i++) {
//     str.toString;
//     console.log(str)
// }

// const letters = ['a', 'b','c']
// let word = ''

// for(let i = 0; i < letters.length; i++) {
//     word += letters[i]
// }

// console.log(word)

// const letters2 = ['a', 'b','c']
// let word2 = ''
// let i = 0
// while(i < letters2.length) {
//     word2 += letters2[i]
//     i++
// }

// console.log(word2)

const letters3 = ['a', 'b','c']
let words = ''

for(const str of letters3) {
    words += str
}

console.log(words)

