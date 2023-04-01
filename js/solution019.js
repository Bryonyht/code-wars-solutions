// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well

//Parameters - array of numbers represented as strings. can be floats. 
//Returns - array of numbers
//Eexamples - ["1", "2", "3"] to [1, 2, 3]
//Pseudocode // reads through array, converting each value to a number as it goes. return new array of numbers.

function toNumberArray(strArr){

    return strArr.map(x => Number(x))
}

console.log(toNumberArray(["1", "2", "3"]))
console.log(toNumberArray(["1", "2.34", "-3"]))
