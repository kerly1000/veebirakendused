//harjutus 1
type User = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}

//soovin näidata ainut name ja age, aga võetakse kogu objekti sisu, kuna kasutatakse user type
function renderUserDetails(user: User) {
    console.log(user.name, user.age)
}

const user: User = {
    id: "asd",
    name: "Kyle",
    age: 23,
    address: {
        street: "puukuju",
        city: "linn"
    }

};
renderUserDetails(user);