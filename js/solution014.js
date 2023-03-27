// function incrementString (strng) {
  
//     let numstart = 0
    
//     for(i=0)
    
    
//   }


//check if string as number is a number

function checkIfNum(word){
    
    let wordtoNum = Number(word)
    
    
    console.log(wordtoNum)
    
    if(isNaN(wordtoNum)){
        return false
    }

    else{
        return true
    }
}

//console.log(checkIfNum("purple"))
//console.log(checkIfNum("80"))


// make index that 
//slice
//increment
//glue back together


function incrementString(string){

    let indexNum = -1
    
    for(i=(string.length-1); i>0; i--){
        
        let chartoNum = Number(string[i])
        
        if(isNaN(chartoNum)){
            indexNum = i + 1
        }
        
        if(indexNum !== -1){
            break;
        }
    }

    let nummyNum = string.slice(indexNum)
    
    if(isNaN(nummyNum)){
        return string + 1
    }
    

    console.log(nummyNum)
    
    
    let incremNum = Number(nummyNum) + 1
    
    
    let incremString = incremNum.toString()
    
    
    
    let padded = incremString.padStart(nummyNum.length, "0")
    
    let first = Number(string.charAt(0))

    if(!isNaN(first)){
         return padded
    }
    
    return string.slice(0,indexNum) + padded
    

    }
    
    
    
    console.log(incrementString("009"))

//console.log(incrementString("sleepy67"))

//If the string does not end with a number. the number 1 should be appended to the new string