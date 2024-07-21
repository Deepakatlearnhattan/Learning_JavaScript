//+++++++++++++++++ object singleton(using constructor) +++++++++++++++++++++

 const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Deepak"
tinderUser.isloggedIn = true

console.log(tinderUser)  // { id: '123abc', name: 'Deepak', isloggedIn: true }

const regularUser = {
    email: "deepak@gmail.com",
    fullname:{
        userFullName:{
            firstName: "Deepak",
            lastName: "Pandey"
        }
    }
}

console.log(regularUser.fullname.userFullName.lastName) // pandey
//console.log(regularUser.fullname?.userFullName.firstName)  // (? is used to check whether this propety is availble or not)

const user1 = {1:"a", 2:"b"}
const user2 = {3:"c", 4:"d"}
const user3 = {5:"e", 6:"f"}

// there are two ways to merge onbject value in an array 1. using "assign" 2. using "spread"

const user4 = Object.assign(user1,user2,user3)
console.log(user4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// "assign " method is old method so we use "spread" method which is simple and easy to readable also

const user5 = {...user1,...user2,...user3}
console.log(user5)   // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// if we need all the "keys" and "values" of an object then we need the following methods

console.log(tinderUser)

console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isloggedIn' ]
console.log(Object.values(tinderUser))  // [ '123abc', 'Deepak', true ]

console.log(Object.entries(tinderUser)) //  [ 'id', '123abc' ], [ 'name', 'Deepak' ], [ 'isloggedIn', true ] ]

// if we need to check whether some properties are present in an object or not then we use this method

console.log(tinderUser.hasOwnProperty("isloggedIn")) // True
console.log(tinderUser.hasOwnProperty("islogged")) // False


// ++++++++++++++++++ Objcet de-structor +++++++++++++++++++++++++++

const course ={
    coursename : "js in hindi",
    price: "Free",
    courseInstructor: "Hitesh"
}

const{courseInstructor} = course
console.log(courseInstructor)  // Hitesh

const{courseInstructor: Instructor} = "course" // de-structor using {} braces 
console.log(Instructor) // Hitesh
 
 