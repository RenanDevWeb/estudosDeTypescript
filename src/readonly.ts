// class Movies {
//     readonly id: number
//     name: string
//     constructor(id:number, name:string){
//         this.id = id
//         this.name = name
//     }
// }
// let movie1 = new Movies(1,"filme1")

// propriedade de parametros 

class Movies {

    constructor(public readonly id:number,  public name:string, private _price?: number ){
        
    }
}
let movie1 = new Movies(1,"filme1",1000)

// index signatures

class hotelRooms {
    [roomNumber: string] : string
}

let room = new hotelRooms()
room.A200 = "renan"
room.A201 = "renan"
room.A203 = "renan"
