//1. Stack (Primitive)    2. Heap (Non Primitive)

let myYoutube = "codewithDeepak"

let anotherName = myYoutube
anotherName = "codewithHarry"
console.log(anotherName) // codewithHarry
console.log(myYoutube)   // codewithDeepak

// In above example if we change the name then the original name will not change because it is a example of stack memory where
// we get the copy of original file in memory and we make change in dublicate file without any change in original file.


let userOne = {

    name:"Deepak"
}

let userTwo = userOne
userTwo.name = "Vishal"

console.log(userOne.name)  // Vishal
console.log(userTwo.name) // Vishal

// above is the example of Heap memory wher we get the refrence of memory file, with which we can change the anything in main file
// without making duplicate file memory