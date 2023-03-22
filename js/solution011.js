function makeString(s){
  
    let arr = s.split(" ")
    
    arr = arr.map(x => x.charAt(0))
    
    return arr.join("")
  }
  