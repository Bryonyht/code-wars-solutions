function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
     
     this.isWorthIt = function(){
       
       let crewWeight = this.crew * 1.5
       
       return ((this.draft - crewWeight)>20)
     }
   }


//aye aye me hearties
