// Parameters- String. Can it be empty? may contain #. 
// Return - string
// Examples - "www.codewars.com#about" --> "www.codewars.com"
//"www.codewars.com?page=1" -->"www.codewars.com?page=1"
//Psedocode -  create an empty string
 // loop through our string, adding each char to new string, until a #. then stop.
 //return new string


function removeUrlAnchor(url){
    let urlWithoutAnchor = ""

    for(i=0; i<url.length; i++){

        if(url.charAt(i)=="#"){
            break
        }
        else{
            urlWithoutAnchor+= url.charAt(i)
        }

    }

    return urlWithoutAnchor


  }

console.log(removeUrlAnchor("www.codewars.com#about"))
console.log(removeUrlAnchor("www.codewars.com?page=1"))