

console.log(0%2)

function solution(str){
   
    let arr = []
    
    for(i=0; i<str.length; i++){
      
        if(i%2==0){
            arr.push(str[0])
        }
        else{
            arr[(i+1)/2] += str[i]
        }

    }
    
    return arr
  }

 testStr = "woozy" 

 console.log(solution(testStr))