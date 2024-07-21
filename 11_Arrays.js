const myArray = [1,2,3,4,5]
//const myHeros = ["Shaktiman", "Spiderman", "Batman"]

const myArray2 = new Array(1,2,3,4,5,6,7)
//console.log(myArray[2])   // 3

// +++++++++++ Array Methods +++++++++++++++++++++++

myArray.push(9)  
//console.log(myArray)   //  [ 1, 2, 3, 4, 5, 9 ] push method used to add new element at the end of array

myArray.pop()
//console.log(myArray) //  [1, 2, 3, 4 ] pop remove last element of array

myArray.unshift(5)
//console.log(myArray) // [ 5, 1, 2, 3, 4 ]  unshift add element at 0 index and shift other elements to the right

myArray.shift()
//console.log(myArray) // [ 1, 2, 3, 4 ]  

console.log(myArray.includes(8))  // false (include is used to find the element is in array or not)
console.log(myArray.indexOf(5))   // 4

const newArray = myArray.join()
console.log(newArray)    // 1,2,3,4,5 (join help to convert array into string)

// +++++++ Slice and Splice ++++++++++

console.log("A  " , myArray)  //  A   [ 1, 2, 3, 4, 5 ]

const myn1 = myArray.slice(2,4) 
console.log(myn1)  //  [ 3, 4 ]  (slice does not include the last defined index)

console.log("B ", myArray)    // B  [ 1, 2, 3, 4, 5 ]
const myn2 = myArray.splice(2,4)
console.log(myn2)       //  [ 3, 4, 5 ]