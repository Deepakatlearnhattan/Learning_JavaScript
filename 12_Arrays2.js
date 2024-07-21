const marvel_Heros = ["spiderman", "ironman", "thor"]
const dc_Heros = ["flash", "superman", "batman"]

marvel_Heros.push(dc_Heros)
console.log(marvel_Heros)  //  [ 'spiderman', 'ironman', 'thor', [ 'flash', 'superman', 'batman' ] ] this is not corect way to
// write because it has array inside another array

console.log(marvel_Heros[3][2]) // batman
// here at 3rd index an array occure in form of element and to find the value or to print value from that element we need to write code
// like above which is lenghty and not proper method. Therefore to make it simple and easy we use concat and spread method.

const new_Heros = marvel_Heros.concat(dc_Heros)
console.log(new_Heros)   // [ 'spiderman', 'ironman', 'thor', 'flash', 'superman', 'batman' ]
// the problem with concat is that we have to make a new variable(new_Heros).

const new_Heros2 = [...marvel_Heros, ...dc_Heros]
console.log(new_Heros2)  //  ['spiderman', 'ironman', 'thor', 'flash', 'superman', 'batman' ]
// (...) is spread method used to print value of two array


const my_Array = [1,2,3,4,[5,6,7,[8,9,10,[11,12,13,14]]]]
const my_array = my_Array.flat(Infinity)
console.log(my_array)    // [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

console.log(Array.isArray("Deepak")) // false
console.log(Array.from("Deepak"))    // [ 'D', 'e', 'e', 'p', 'a', 'k' ]

const score1 = 200
const score2 = 300
const score3 = 2304
console.log(Array.of(score1,score2,score3)) // [ 200, 300, 2304 ]




