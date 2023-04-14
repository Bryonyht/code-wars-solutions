// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, 
// so you decided to take the opportunity to go for a short walk. The city provides its 
// citizens with a Walk Generating App on their phones -- everytime you press the button it 
// sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block for each letter (direction) and you know it takes you one minute 
// to traverse one city block, so create a function that will return true if the walk the app gives you will 
// take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your 
// starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
// It will never give you an empty array (that's not a walk, that's standing still!)

//parameters - an array of strings representing directions
//results - boolean 
//examples -- isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true')
//             isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false')
// pseudo code -- is the array 10 long for ten minutes of walking
// work out counts of each letter, filter then length?
// if e-w=0 and n-s=0 then you are back at starting position

function isValidWalk(walk) {
    if (walk.length!==10){
        return false
    }

    let northCount = walk.filter(x => x=="n").length
    let southCount = walk.filter(x => x=="s").length
    let westCount = walk.filter(x => x=="w").length
    let eastCount = walk.filter(x => x=="e").length

    if(northCount==southCount&&westCount==eastCount){
        return true
    }

    return false


  }

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','n']))