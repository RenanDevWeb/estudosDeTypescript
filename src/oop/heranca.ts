class PersonHeranca {
    constructor(public firstName: string,public lastName: string,public age: number){
       
    }
    greet(){
        console.log("hi");
    }
}

class ClienteBanco extends PersonHeranca{
    
    constructor(public firstName: string,public lastName: string,public age: number,public balance: number){
        super(firstName,lastName,age)
       
    }

    balanceAccount(){
        console.log(this.balance);
    }
}

let cliente1 = new ClienteBanco("Renan","Salmazio",30,1000)