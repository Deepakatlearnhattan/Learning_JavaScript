
// scopes are of three types:1.local scope(block scope)  2.global scope  3.Function scope

//+++++++++++++++ Local scope ++++++++++++++++
{
   let a = 4
}
console.log(a)  // no result because this is local scope and using let we cant access the value of a outside the {}.
// to get access of value we use "var".
{
    var a = 3
}
console.log(a) // 3  

// we have also different method to print the value from inside {}, using function 

function ax(){
    let a = 10
    console.log(a)
}
ax(a)  // 10

//++++++++++++++++ global scope ++++++++++++++++++++
// let p = 23
// function ax(){
//     console.log(p) 
// }
// ax(a) // 23


function one(){
    const username = "Deepak"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)  this gives you error because its is out of the {} or we can say it is local scope

    two()
}
one() // Deepak [username is not in the 2nd function {} although it print the value of username bacause 2nd function
//  is child of first function,means it is parent function hence child parents can access every values






