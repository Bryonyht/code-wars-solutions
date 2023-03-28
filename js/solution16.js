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
    return stringArr.join("")
  }