function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }
  

function destructuredAnimal({name, legs, colour}){
    return `This ${colour} ${name} has ${legs} legs`
}