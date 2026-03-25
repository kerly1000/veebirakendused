
type User = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}

const user: User = {
    id: "ads",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "London"
    }
}

//omit kasutamine tähendab properti emaldamist User typest
//kui sinna console logi kirjutada user.id, siis annab veateate, kuna Omit välistab selle
function createUser(user: Omit<User, "id">) {
    console-log(user.id, user.name, user.age)
}

//kui kasutan partial-it, siis kõik muutujad on valikulised
function updateUser(user: Partial<User>) {

}

createUser({name: "Ironman", age: 567, address: {street: "asd", city: "asdCity"}})