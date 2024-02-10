var product1;
product1 = {
    nome: "apple",
    price: 2,
    itemPurchase: function (message) {
        console.log("".concat(message, " ").concat(this.nome));
    }
};
product1.itemPurchase("thanks for your purchase");
console.log(product1);