function getAverage(marks){
  
    let total = marks.reduce((acc, element) => acc + element, 0)
    
    let average = total/marks.length
    
    return Math.floor(average)
  }