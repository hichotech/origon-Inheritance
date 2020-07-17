
class Traveler {
    constructor(name){
        this.name = name
        this.food = 1
        this.ishealthy  = true
    }
    hunt (){
        this.food +=2
        
    }
        
    eat (){
       
       
       
       if(this.food<=0){
        
           this.food =0
         this.ishealthy =false
       }else{
        this.food -=1
       }
       return this.ishealthy
    }

     
    }
    class Doctor extends Traveler{
        constructor(name){
            super(name)
    
    
        }
    
    
    heal(traveler){
        
       traveler.ishealthy =true

    
    
    
    
    
    }
    
    
    
    }
    class Hunter extends Traveler{
        constructor(name){
            super(name)
            this.food=2
          
        }
        hunt(){
           this.food +=5
            

        }
        eat(){

            this.food -=2
       
            if(this.food<=0){
                this.food =0
              this.ishealthy =false
            }
            
          

        }
        giveFood(traveler, numOfFoodUnits){
         
           
           if (this.food > 0){
               traveler.food =+ numOfFoodUnits
              
               this.food -= numOfFoodUnits
           }
          
           
        
           
             
             
         
         
         
        }

    }
    
    