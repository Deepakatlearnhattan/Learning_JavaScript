//+++++++++++++++ Object Literals ++++++++++++++

const jsUser = {
    name: "Deepak",
    age: 24,
    location: "Delhi",
    email: "deepak@google.com",
    isLoggedIn: "false",
    lastLoggedIn: ["Mondaay", "Tuesday"]

}

console.log(jsUser["email"]) // deepak@google.com
console.log(jsUser["name"])  // Deepak
console.log(jsUser["location"]) // Delhi

jsUser.email = "deepak@gmail.com" // we change anything in the object 
console.log(jsUser)  // it will change the email id

// Object.freeze(jsUser) // it freeze the object and we cant make change after

// calling function using object

jsUser.greeting = function(){
    console.log(`hello js User, ${this.name}`)
}
console.log(jsUser.greeting()) // Hello js User, Deepak
