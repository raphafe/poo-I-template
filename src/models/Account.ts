export class Account {
    constructor(
        private id: string,
        private ownerId: string
    ) {}

    public getId() : string{
        return this.id
    }

    public setId(newId: string) : void{
        this.id = newId
    }

    public getownerId() : string{
        // this referencia o objeto ownerId
        return this.ownerId
    }

    public setownerId(newownerId: string) : void{
        this.ownerId = newownerId
    }
}