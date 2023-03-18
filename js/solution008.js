function flattenAndSort(array) {
  
    let ansArray = []

    ansArray = ansArray.concat(...array)
    
    
    return ansArray.sort((a,b) => a-b);
  }

  let arr = [[3,1,3],[],[3,4]]

let emp = [[],[]]

console.log(flattenAndSort(arr))
console.log(flattenAndSort(emp))