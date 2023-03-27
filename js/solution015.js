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
    
    return string.slice(0,indexNum) + padded
    
    }
    
    
    
    console.log(incrementString("009"))