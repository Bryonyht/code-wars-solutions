//Parameters - two strings, mixed casing, empty? just letters?
// returns boolean
//examples isAnagram("foefet", "toffee"), true, "dumble", "bumble"), false, Buckethead", "DeathCubeK"), true
// pseudocode
// both to lowercase. split sort join. test if equal
// write the function isAnagram
var isAnagram = function(test, original) {

    test = test.toLowerCase()
    original = original.toLowerCase()

    test = test.split("").sort().join("")
    original = original.split("").sort().join("")

    return test==original
}

console.log(isAnagram("foefet", "toffee"))//true
console.log(isAnagram("dumble", "bumble"))//false
console.log(isAnagram("Buckethead", "DeathCubeK"))//true