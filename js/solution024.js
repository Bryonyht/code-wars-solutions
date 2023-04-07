function splitAndMerge(string, separator) {
    let arr = string.split(" ")
    arr = arr.map(x => x.split(""))
    
    arr=  arr.map(x => x.join(separator))
    
    return arr.join(" ")
    
  }