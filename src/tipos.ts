let price = 40;
let itemName = "apple";
let inStore = true;

let value: number;
value = 10;

let values: number[] = [10, 20.3, 40, 60];

let item: [string, number, boolean] = ["apple", 3, true];

//type enum
enum Acess {
  admin = 1,
  user = 2,
}

const user = {
  firstName: "Renan",
  Age: 40,
  role: Acess.admin,
};

// type unknown
let inputItem: unknown;
let itenName: string;
inputItem = 10;
inputItem = "string";

// type never
function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

// type alias
type users = {
  firstName: string;
  lastName: string;
  age: number;
};

let usuarios: users = {
  firstName: "Renan",
  lastName: "Salmazio",
  age: 10,
};
console.log(usuarios);

// type union

function userInput(input1: number | string, input2: number | string) {
  let result: number | string;
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
let productPrice: 10 | 20 | 30;
productPrice = 30;
// productPrice = 40
let productSize: "S" | "M" | "L";
productSize = "S";

//intersaction

type User = {
  firstName: string;
  age: number;
};

type JobRole = {
  id: number;
  role: string;
};

type employee = User & JobRole;

const employee1: employee = {
  firstName: "firstName",
  age: 10,
  id: 1512,
  role: "admin",
};
console.log(employee1);

generateError("Not Found", 404);
