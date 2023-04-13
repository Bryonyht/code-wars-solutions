//Paremeters- 3 numbers? positive integers
//Result - return boolean
//Examples- isTriangle(1,2,2), true/ isTriangle(7,2,2), false
//Pseudocode - triangle inequality theroum se the Triangle Inequality Theorem, 
//which states that the sum of two side lengths of a triangle is always greater than the third side
// add a &b, b&c, a&c to 
//compare with their alternate
//if any are true return

function isTriangle(a,b,c){
   if((a+b)>c&&(b+c)>a&&(a+c)>b){
    return true
   } 
   return false;
}

console.log(isTriangle(1,2,2))
console.log(isTriangle(7,2,2))