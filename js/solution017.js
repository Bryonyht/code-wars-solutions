//P parameters- sting, always a string. but it might be empty. 
//R return- return, an object- properties are characters, value is the count
//E "purple" => {"p": 2, "u": 1, "r": 1, "l": 1, "e":1}
// "" => {}
//P // loop through the string
//count the characters

//The main idea is to count all the occurring characters in a string. 
//If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//What if the string is empty? Then the result should be empty object literal, {}.

function characterCount(string){

    const objectCount = {}

    for(i=0; i<string.length; i++){

        let char = string[i]

        if(char in objectCount){
            objectCount[char] += 1
        }
        else {
            objectCount[char] = 1
        }
    }

     return objectCount

}

console.log(characterCount("purple"))
