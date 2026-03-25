type UserRequired = {
    //võin iga properti ette panna readonly
    //readonly on selle pärast, et keegi midagi ei saaks muuta, sh eksikombel
    //readonly id: String
    readonly prop1: string
    id: string
    name: string
    age: number
    //? - tähendab valikulist muutujat, st ei ole kohustuslik
    address?: {
        street: string
        city: string
    }
}

//kui hoiad T tähe peal kursorit, siis näed, et propertid on readonlyks muudetud
type T = Readonly<UserRequired>

//oletame, et tahame, et see properti oleks kindlasti kasutatud
//vastupidine Partialiga
function createUserWithAddress(user: Required<UserRequired>) {}

//nn külmutab kõik objekti sees ja ei saa kasutada
//Object.freeze()
