// two integrs
// a single integer
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// put in array and sort
// for loop to make new arr
// reduce new arr

function getSum(a, b)
{
    let arr = [a, b]

    arr = arr.sort((x, y) => x - y)

    let newArr = []

    for(i=arr[0]; i<= arr[1]; i++){

        newArr.push(i)
    }

   return newArr.reduce((a,b) => a+b, 0)
}

console.log(getSum(-1, 2)) // 2
console.log(getSum(1,0)) //1