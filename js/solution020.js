// In this Kata, you will be given a string and your task will be to return a 
// list of ints detailing the count of uppercase letters, lowercase, numbers and 
// special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!
//P a string- can it be empty? contains uppercase letters, lowercase, number, special character. Can the numbers be floats?
//R an array of counts- uppercase letters, lowercase, numbers and special characters.
//E ("*'&ABCDabcde12345") = [4,5,5,3] 
// ("") =  [0,0,0,0]
//Pseudo code
// set up counts for each string type
//// parse though code? charcode at? increasing counts each time
// put counts into array and return


// ""
// console.log()



// function solve(s){
    
// let upper = 0
// let lower = 0
// let nums = 0
// let special = 0

// for (i=0; i<s.length; i++){

//     if(s.charCodeAt(i)<40)


// }


//    }


const solve = (s) => {
    let result = [0, 0, 0, 0];
    for (let i = 0; i < s.length; i += 1) {
      if (s[i].toLowerCase() > s[i]) {
        result[0] += 1;
      } else if (s[i].toUpperCase() < s[i]) {
        result[1] += 1;
      } else if (s[i] >= 0 && s[i] <= 9) {
        result[2] += 1;
      } else {
        result[3] += 1;
      }
    }
    return result;
  }