//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
//Your task is to process a string with "#" symbols.
//Parameters - string- can the string be empty? is it always a string?
//Returns- return a processed string
//Examples -- a#bc#d -> bd
// dgh -> dgh
//"" -> ""
//"#34" -> ? "#34"
//Pseudocode loop through the string
//add values to our out put unless a # is after them or they are a "#"


function cleanString(s) {
    let string = ""
    
    for(i=1; i<=s.length; i++)
    if(s[i]!=="#" && s[i-1]!=="#") {
        
        string += s[i-1] 
    }

    return string
  }

console.log(cleanString("a#bc#d")) // #b#

console.log(cleanString("dgh"))
console.log(cleanString(""))
