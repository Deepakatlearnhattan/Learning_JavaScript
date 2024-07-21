function sayMyName(){    // function is defined here using "function(){}" 
    console.log("D"),
    console.log("E"),
    console.log("E"),
    console.log("P")
    console.log("A")
    console.log("K")
}

sayMyName() // function is being called here "function name with () brackets"

function addTwoNumbers(number1 , number2){  // while defining parameter of function we call it a parameter. eg.(number1,number2) is parameter
    console.log(number1 + number2)
}

addTwoNumbers(3,4) // while calling function the value we call is called arguments. eg.(3,4) is arguments
addTwoNumbers(3,"4") // 34
addTwoNumbers(3,"abc") // 3abc

// we can run the above code by making variable also.

function addTwoNumbers(){
    let result = number1 + number2
           return result
    // return number1 + number2
}
const result = addTwoNumbers(3,5) // variable
console.log("Result;" , result) // Result: 8

function calculateCartPrice(...num1){      // (...) is used because we don't know how many items were being added in the cart
    return num1
}
console.log(calculateCartPrice(200,300,320,430))  // it gives result in array [200,300,320,430]

// how to handle object in function:-

const user = {
    username: "Deepak",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`)
}
handleObject(user) // username is Deepak and price is 199

// how to handle array in function:-

const myArray = [200,400,300,749]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myArray))  // 300
 // console.log(returnSecondValue(myArray[200,400,300,749])) // 300
 

