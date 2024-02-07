"use strict";
let price = 40;
let itemName = "apple";
let inStore = true;
let value;
value = 10;
let values = [10, 20.3, 40, 60];
let item = ["apple", 3, true];
//type enum
var Acess;
(function (Acess) {
    Acess[Acess["admin"] = 1] = "admin";
    Acess[Acess["user"] = 2] = "user";
})(Acess || (Acess = {}));
const user = {
    firstName: "Renan",
    Age: 40,
    role: Acess.admin,
};
// type unknown
let inputItem;
let itenName;
inputItem = 10;
inputItem = "string";
// type never
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code,
    };
}
let usuarios = {
    firstName: "Renan",
    lastName: "Salmazio",
    age: 10,
};
console.log(usuarios);
// type union
function userInput(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
        return result;
    }
    if (typeof input1 === "string" && typeof input2 === "string") {
        result = input1.toString() + input2.toString();
        return result;
    }
}
const combinePrices = userInput(10, 20);
console.log(combinePrices);
const combineNames = userInput("apple", "mac");
console.log(combinePrices);
// type literal
let productPrice;
productPrice = 30;
// productPrice = 40
let productSize;
productSize = "S";
const employee1 = {
    firstName: "firstName",
    age: 10,
    id: 1512,
    role: "admin",
};
console.log(employee1);
generateError("Not Found", 404);
