// Someone was hacking the score. Each student's record is given as an array 
//The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
// ["name2", 140, ["B", "A", "A", "A"]],
// ["name3", 200, ["B", "A", "A", "C"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, 
//additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
// ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
// ["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
// ];

// return ["name1", "name3"];

// Parmeters- an array, each element is an array of 3 items, name score and array
// return, an array of names,
// eXAMPLES  var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
// ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
// ["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
// ]   
//pseudocode
// creat function which checks score of array
//filter input for correct scores
//return just names from filtered 

function findHack(arr) {
    
    function isScoreCorrect(element){

        let grades = element[2]
        let score = 0
        for(i=0; i<grades.length; i++){
            if(grades[i]=="A"){
                score+=30
            }
            else if(grades[i]=="B"){
                score+=20
            }
            else if(grades[i]=="C"){
                score+=10
            }
            else if(grades[i]=="D"){
                score+=5
            }
        }
        if(grades.length>=5 && grades.filter(x=> x=="A" || x=="B").length==grades.length){
            score+=20
        }
        if(score>200){
            score = 200
        }
    
        return score!==element[1]

    }



    let noneHacked = arr.filter(x => isScoreCorrect(x))
    let names= []
    noneHacked.forEach(element => {
        names.push(element[0])
    });
     
    return names
}

 
//isScoreCorrect(["name2", 110, ["B", "A", "A", "A"]]) //110
//isScoreCorrect(["name2", 110, ["B", "A", "A", "A", "A"]]) //160

findHack([
     ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
    ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
    ["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
    ]  ) //name2?