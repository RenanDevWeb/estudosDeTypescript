interface IItem{
    nome: string
    price: number

   itemPurchase(message:string):void

}
let product1 : IItem

product1 = {
    nome: "apple",
    price : 2,
    itemPurchase(message: string){
        console.log(`${message} ${this.nome}`)
    }
}

product1.itemPurchase("thanks for your purchase")
console.log(product1)