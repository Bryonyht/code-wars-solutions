//Parameters -  two strings, all lowercase. 
//Return a single string, in alphabetical order
//Example ("cat", "dog")-> "acdgot" ("bee", "godzilla")-> "abdegiloz" 
//Pseudocode make a new string
            // loop through each string?
            //if letter is already in new string add it
            //ow don'd add



function longest(s1, s2) {
    let s3 =""

function addString(string){

for(i=0; i<string.length; i++){
if(!s3.includes(string[i])){
 s3 += string[i]
}
}
}
addString(s1)
addString(s2)

// for(i=0; i<s2.length; i++){
//     if(!s3.includes(s2[i])){
//         s3 += s2[i]
//     }
// }

return s3.split("").sort().join("")
}

console.log(longest("cat", "dog"))
console.log(longest("bee", "godzilla"))