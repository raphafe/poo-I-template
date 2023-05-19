export class User {
    // atributos

    // forma verbosa

    // id: string
    // name: string
    // email: string
    // password: string

    // constructor

    // forma verbosa

    // constructor(id: string, name: string, email: string, password: string) {
    //     this.id = id,
    //     this.name = name,
    //     this.email = email,
    //     this.password = password
    // }
    // metodos (são funções)

    //______________________

    // forma reduzida de tudo
 constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private createdAt: string
 ) {}

    // metodos (são funções)
    public getId() : string{
        // this referencia o objeto id
        return this.id
    }

    public setId(newId: string) : void{
        this.id = newId
    }

    public getName() : string{
        return this.name
    }

    public setName(newName: string) : void {
        this.name = newName
    }

    public getEmail() : string {
        return this.email
    }

    public setEmail(newEmail : string) : void {
        this.email = newEmail
    }

    public getPassword() : string {
        return this.password
    }

    public setPassword(newPassword : string) : void {
        this.password = newPassword
    }

    public getCreatedAt() : string {
        return this.createdAt
    }

    public setCreatedAt(newCreatedAt : string) : void {
        this.createdAt = newCreatedAt
    }
}

// INSTANCIA

// const user1 = new User(
//     "004",
//     "Raphaela",
//     "rapha@gmail.com",
//     "123456",
//     ""
// )
//por ser atributo private, não tem como acessar
//console.table(user1.id);

// console.table(user1.getId());