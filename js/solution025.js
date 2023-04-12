//Parameters: two strings. casing?
//R boolean
//E example (fox, fruitcake)=> false / (bear, icecream) -> false / (Bear, blueberries) -> false, (dog, dung) -> true
//Pseudo-code Take the first letter of each, ?transform to lowercase?, compare and return

function feast(beast, dish) {
let b= beast.charAt(0)
let d = dish.charAt(0)

let bLast = beast.charAt(beast.length-1)
let dLast = dish.charAt(dish.length-1)

return (b==d && bLast==dLast)
}

console.log(feast("bear", "Blueberries"))
console.log(feast("dog", "dung"))