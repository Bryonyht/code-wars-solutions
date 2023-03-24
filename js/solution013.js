function longestConsec(strarr, k) {
  
    if(strarr.length==0|| strarr.length<k || k<=0){
        return ""
      }

    let conCatArr = []
    
    for(let i=(k-1); i< strarr.length; i++){
      
      let conStr = ""
      
      for(let j=(i-k+1); j<=i; j++){
       
        console.log(strarr[j])
      conStr += strarr[j]
      
      }
        
      conCatArr.push(conStr)
    }
  
  let maxLength = Math.max(...conCatArr.map(x => x.length))
  
  let longStrings = conCatArr.filter(x => x.length == maxLength)
    
  return longStrings[0]
    
  }


  let arr = ["mincey", "pies", "recorder", "once"]

  console.log(longestConsec(arr, 3))