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

for(i=0; i<string.length; i++){
    
    let chartoNum = Number(string[i])
    
    if(!isNaN(chartoNum)){
        indexNum = i
    }
    
    if(indexNum !== -1){
        break;
    }
}

let nummyNum = string.slice(indexNum)

//if charAt 0,1,2 etc is 0 count++ ? then padstart to count? 
// nummyNum.length < nummyNum++.length, nummyNum pad start? 
nummyNum++


return string.slice(0,indexNum) + nummyNum

}



console.log(incrementString("bee42"))

//console.log(incrementString("sleepy67"))