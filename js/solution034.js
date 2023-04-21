//Your task is to add a new property usersAnswer to every object in the array questions. The value of 
//usersAnswer should be set to null. The solution should work for array of any length

// parameter- an array of any length- inc 0?
// return- array of objects with additional property
// examples // 
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}]

// //var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }]//
//
// loop through array
// add new property to each object
//
//
// return array


function addUsersAnswer(arr){

arr.map(x => x.usersAnswer = null)

return arr

}

console.log(addUsersAnswer(questions))
console.log(addUsersAnswer([]))