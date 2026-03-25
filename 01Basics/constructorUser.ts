class UserCode {
    name: string

    //teha constructor
    constructor(name: string) {
        this.name = name
    }
}

type G = ConstructorParameters<typreof UserCode>
