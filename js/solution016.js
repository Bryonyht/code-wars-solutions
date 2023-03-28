function stringy(size) {
  
    let stringArr = []
    
    for(i=1; i<=size; i++){
      if(i%2==0){
        stringArr[i]="0"
      }
      else{
        stringArr[i]="1"
      }
    }
    console.log(stringArr.join(""))
  }


  function stringyString(size) {
  
    var string = ""
    
    for(i=1; i<=size; i++){
    //   if(i%2==0){
    //     string[i]="0"
    //   }
    //   else{
    //     string[i]="1"
    //   }
    
    string+= i%2 
    }
    console.log(string)
  }

  //stringy(7)
  stringyString(7)