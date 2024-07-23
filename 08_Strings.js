const name = "Deepak"
const repoCount = 50
//console.log(`My name is ${name} and my repo count is ${repoCount}`) // my name is Deepak and my repo count is 50

//+++++++++++++++String prototypes++++++++++++++++++++++++//

const gameNew = new String("Deepak")

console.log(gameNew.length) // 6

console.log(gameNew.toUpperCase()) //DEEPAK

console.log(gameNew.charAt(3)) // p
console.log(gameNew.indexOf("e")) // 1

console.log(gameNew.substring(0,5)) // Deepa
console.log(gameNew.slice(-2,6))   // ak


const newString = "     Deepak"
console.log(newString)           // _____Deepak
console.log(newString.trim())    // Deepak


const url = "http://Deepak.com/Deepak%20Pandey"
console.log(url.replace("%20","-"))    // http://Deepak.com/Deepak-Pandey

console.log(url.includes("Deepak")) // true



const newGame = "GTA-vice-City"
console.log(newGame.split("-")) // split convert string into an array ["GTA" "Vice" "City"]



