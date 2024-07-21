const score = 400
console.log(score) // 400

const balance = new Number(100)     // it cast exact value that it is a number not a string
console.log(balance)      //  [Numbera: 100] 

console.log(balance.toString())  // 100 but it convert into a String
console.log(typeof "balance")  // String

console.log(balance.toString().length) // 3

console.log(balance.toFixed(2))  // 100.00 gives two digit number after decimal


const otherNumber = 238746.7563
console.log(otherNumber.toPrecision(6))  // 238747

const otherNumber2 = 100000000000
console.log(otherNumber2.toLocaleString())  // 100,000,000,000
console.log(otherNumber2.toLocaleString("en-IN"))  // 1,00,00,00,00,000 it covert into indian format of reading number

// ++++++++++++++++++++ MAths ++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-5)) // 5 (abs convert negative value in positive)
console.log(Math.round(3.54)) // 4 
console.log(Math.ceil(4.2))  // 5 (round up to the top value)
console.log(Math.floor(5.9)) // 5 (round up to the lowest value)

console.log(Math.random()) // gives any random number between 0 and 1


console.log(Math.max(65,43,98,76,57)) // 98
console.log(Math.min(74,82,35,36,87)) // 35




 