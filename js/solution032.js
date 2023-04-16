// parameter string
// return shorter string! without lowercase vowells only
// examples "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
//pseudocode-  new stirng, for loop if not vowel +=, return string
function shortcut (string) {
    let shortString = ""

    for(i=0; i<string.length; i++){
        if(string[i]!="a"&& string[i] !="e" &&string[i]!="o"&&string[i]!="i"&&string[i]!="u"){
        
            shortString+=string[i]
        }
    }
    
    return shortString;
  }

console.log(shortcut("HELLO"))// "HELLO"
console.log(shortcut("codewars"))// "cdwrs"
