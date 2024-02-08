// Day 5 - Exercise 5

interface UserSchema {
   readonly  id: number
    name: string
}

class UserExercicio5 implements UserSchema {
    constructor(public name: string, readonly id: number) {}
}

const userexercicio5 = new UserExercicio5('Dog', 1)

// console.log(user.id)

userexercicio5.name = 'Harold' // pode mudar
// userexercicio5.id = 5 // nao pode mudar

console.log(`User:`, user)