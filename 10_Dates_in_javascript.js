let myDate = new Date()
console.log(myDate.toString()) // wed jul 03 2024 20:09:01 GMT+0530 (Indian Standard Time) this gives you current date and time
console.log(myDate.toDateString()) //Wed Jul 03 2024
console.log(myDate.toLocaleString())  // 7/3/2024, 8:11:56 PM
console.log(typeof myDate)  // Object
// date is object in js


let createDate = new Date(2024, 0, 23)
console.log(createDate.toDateString()) // Tue Jan 23 2024 (months starts from 0 in js)

let mycreateDate = new Date(2024, 2, 4, 1, 5)
console.log(mycreateDate.toLocaleString()) // 3/4/2024, 1:05:00 AM

let currentDate = new Date(2024, 4, 11, 14, 49 ) 
console.log(currentDate.toLocaleString())  //  5/11/2024, 2:49:00 PM



