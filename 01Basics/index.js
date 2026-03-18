//soovin näidata ainut name ja age, aga võetakse kogu objekti sisu, kuna kasutatakse user type
function renderUserDetails(user) {
    console.log(user.name, user.age);
}
var user = {
    id: "asd",
    name: "Kyle",
    age: 23,
    address: {
        street: "puukuju",
        city: "linn"
    }
};
renderUserDetails(user)