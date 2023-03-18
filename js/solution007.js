function flattenAndSort(array) {
  
    let ansArray = []

    array.map(x => x.map(x=> ansArray.push(x)))
    
    
    return ansArray.sort((a,b) => a-b);
  }

  let arr = [[1,3,3],[],[3,4]]

let emp = [[],[]]

console.log(flattenAndSort(arr))
console.log(flattenAndSort(emp))