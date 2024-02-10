class Users{
  name: string
  balance: number

  constructor(name: string, balance: number){
       
    this.name =  name,
    this.balance =  balance
  }   


   addMoney(amount:number):number{
   return  this.balance += amount
   }


}

const user1 = new Users("Renan",1000)  
user1.addMoney(2000)