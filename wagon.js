class Wagon{
    constructor (capacity){

    this.capacity = capacity
    this.passengers = []

    }
    
    getAvailableSeatCount(){
        return this.capacity-this.passengers.length 
        console.log(getAvailableSeatCount)
    }
    join(traveler){
        if (this.getAvailableSeatCount() >=1){
            this.passengers.push(traveler)
        }
    }
   
     shouldQuarantine(){

  let sickPeople = this.passengers.filter(passengerStatus => passengerStatus.isHealthy == false) 
    if (sickPeople.length === 0 ) {
     return false
    }else{
        return true
    }}

  totalFood(){
      
      for(passg = 0; pass < passengers.length; passg++){
          return += passg[totalFood]
      }

  }

        
}