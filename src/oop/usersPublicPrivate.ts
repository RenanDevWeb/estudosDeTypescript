class UsersPublicPrivate{
    name: string
   private balance: number = 0
  
    constructor(name: string, balance: number){
         
      this.name =  name,
      this.balance =  balance
    }   
  
  
     addMoney(amount:number):number{
     return  this.balance += amount
     }
  
  
  }
  
  const userTest = new UsersPublicPrivate("Renan",1000)  

  userTest.addMoney(2000)