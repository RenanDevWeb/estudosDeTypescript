class PersonHerancaOverride {
    constructor(public firstName: string,public lastName: string,public age: number){
       
    }
   get greet(){
       return this.firstName + "" + this.lastName
    }
}

class ClienteBancoSobreCarga extends PersonHerancaOverride{
    
    override get greet(){
        return 'Dear ' + super.greet
     }
   
}

class FuncionarioBancoSobreCarga extends PersonHerancaOverride{
   override get greet(){
        return "Hi " +  super.greet
}
}
let cliente = new ClienteBancoSobreCarga("renan","salmazio",10)
let staff = new ClienteBancoSobreCarga("ana","salmazio",10)

console.log(cliente.greet);