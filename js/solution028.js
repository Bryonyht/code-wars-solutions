//Parameters -  an integer. 
//Results- return, a number representing the cost
// Examples function rentalCarCost(d) 1-> 40, 3-> 100 8->270
// presudocode- is d less than 3. is d less than 7 but greater than 3. is d greater than three

function rentalCarCost(d) {
   
   if(d<3){
    return d * 40 
   }
   if (d>=3 && d<7){
    return ((d*40) - 20)
   }
   if (d>=7){
    return ((d*40)- 50)
   }

}

console.log(rentalCarCost(1))
console.log(rentalCarCost(3))
console.log(rentalCarCost(8))