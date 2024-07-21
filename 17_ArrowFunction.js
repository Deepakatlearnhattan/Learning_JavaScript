const user = {
    username: "Deepak",
    money: 900,

    welcomeNote: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this) // +++++{
        //     username: 'Deepak',
        //     money: 900,
        //     welcomeNote: [Function: welcomeNote]
        //   } +++

    }


}
// user.welcomeNote() // Deepak, welcome to the website
// user.username = "Sam"
// user.welcomeNote() // Sam, welcome to the website

console.log(this)  // {}

